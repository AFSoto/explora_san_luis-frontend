<template>
  <div class="min-h-[80vh] flex items-center justify-center py-12 px-4">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg ring-1 ring-stone-200/60 p-8">
      <!-- Ícono -->
      <div class="flex justify-center mb-6">
        <div class="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center">
          <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
      </div>

      <!-- Título -->
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold text-stone-900">Verificar correo</h2>
        <p class="text-sm text-stone-500 mt-2 leading-relaxed">
          Enviamos un código de 6 dígitos a
          <span class="font-semibold text-stone-700">{{ email }}</span>
        </p>
      </div>

      <!-- Formulario -->
      <form @submit.prevent="handleVerificar">
        <!-- Inputs de código -->
        <div class="flex justify-center gap-3 mb-6">
          <input
            v-for="(_, i) in 6"
            :key="i"
            ref="inputRefs"
            type="text"
            maxlength="1"
            inputmode="numeric"
            class="w-12 h-14 text-center text-xl font-bold rounded-lg border text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow"
            :class="error ? 'border-red-400' : 'border-stone-300'"
            @input="handleInput($event, i)"
            @keydown="handleKeydown($event, i)"
            @paste="handlePaste"
          />
        </div>

        <!-- Error -->
        <p v-if="error" class="text-red-500 text-sm text-center mb-4">
          {{ error }}
        </p>

        <!-- Submit -->
        <button
          type="submit"
          :disabled="loading || code.length !== 6"
          class="w-full py-3 bg-lime-400 hover:bg-lime-500 disabled:opacity-50 disabled:cursor-not-allowed text-stone-900 font-bold text-base rounded-lg transition-colors"
        >
          <span v-if="loading" class="inline-flex items-center gap-2">
            <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Verificando...
          </span>
          <span v-else>Verificar código</span>
        </button>
      </form>

      <!-- Info -->
      <p class="text-center text-xs text-stone-400 mt-6 leading-relaxed">
        ¿No recibiste el correo? Revisa tu carpeta de spam o
        <button
          @click="handleResend"
          :disabled="resendCooldown > 0"
          class="font-semibold text-emerald-600 hover:text-emerald-700 disabled:text-stone-400 disabled:cursor-not-allowed transition-colors"
        >
          {{ resendCooldown > 0 ? `reenviar en ${resendCooldown}s` : 'reenviar código' }}
        </button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'
import { ROUTE_NAMES } from '@/constants/routes'
import api from '@/api/axios'
import { AUTH } from '@/api/endpoints'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const email = computed(() => route.query.email || '')
const inputRefs = ref([])
const digits = ref(['', '', '', '', '', ''])
const loading = ref(false)
const error = ref('')
const resendCooldown = ref(60)
let cooldownInterval = null

const code = computed(() => digits.value.join(''))

// ── Input handlers
function handleInput(event, index) {
  const value = event.target.value.replace(/\D/g, '')
  digits.value[index] = value

  if (value && index < 5) {
    inputRefs.value[index + 1]?.focus()
  }
}

function handleKeydown(event, index) {
  if (event.key === 'Backspace' && !digits.value[index] && index > 0) {
    inputRefs.value[index - 1]?.focus()
  }
}

function handlePaste(event) {
  event.preventDefault()
  const pasted = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)

  pasted.split('').forEach((char, i) => {
    digits.value[i] = char
    if (inputRefs.value[i]) {
      inputRefs.value[i].value = char
    }
  })

  const focusIndex = Math.min(pasted.length, 5)
  inputRefs.value[focusIndex]?.focus()
}

// ── Verificar
async function handleVerificar() {
  if (code.value.length !== 6) return

  error.value = ''
  loading.value = true

  try {
    await authStore.verificarCodigo({
      email: email.value,
      codigo: code.value,
    })
    router.push({ name: ROUTE_NAMES.HOME })
  } catch (err) {
    const message = err.response?.data?.message
    error.value = message || 'Código incorrecto o expirado'
    digits.value = ['', '', '', '', '', '']
    inputRefs.value[0]?.focus()
  } finally {
    loading.value = false
  }
}

// ── Reenviar código
async function handleResend() {
  if (resendCooldown.value > 0) return

  try {
    await api.post(AUTH.REGISTER, {
      email: email.value,
      reenviar: true,
    })
    resendCooldown.value = 60
    startCooldown()
  } catch {
    error.value = 'No se pudo reenviar el código'
  }
}

function startCooldown() {
  cooldownInterval = setInterval(() => {
    resendCooldown.value--
    if (resendCooldown.value <= 0) {
      clearInterval(cooldownInterval)
    }
  }, 1000)
}

// ── Redirect si no hay email
onMounted(() => {
  if (!email.value) {
    router.push({ name: ROUTE_NAMES.REGISTER })
    return
  }
  startCooldown()
  inputRefs.value[0]?.focus()
})

onUnmounted(() => {
  if (cooldownInterval) clearInterval(cooldownInterval)
})
</script>
