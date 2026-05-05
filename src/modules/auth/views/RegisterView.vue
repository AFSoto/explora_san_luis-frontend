<template>
  <div class="min-h-[80vh] flex items-center justify-center py-12 px-4">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg ring-1 ring-stone-200/60 p-8">
      <!-- Título -->
      <div class="text-center mb-6">
        <h2 class="text-2xl font-bold text-stone-900">Crear cuenta</h2>
        <p class="text-sm text-stone-500 mt-1">Únete a la comunidad de Explora San Luis</p>
      </div>

      <!-- Google -->
      <button
            @click="handleGoogleLogin"
            :disabled="googleLoading"
            class="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-lg border border-stone-300 hover:bg-stone-50 transition-colors text-sm font-medium text-stone-700 mb-6 disabled:opacity-50"
          >
        <svg class="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A11.96 11.96 0 001 12c0 1.94.46 3.77 1.18 5.39l3.66-2.84z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        Registrarse con Google
      </button>

      <!-- Separador -->
      <div class="flex items-center gap-3 mb-6">
        <span class="h-px flex-1 bg-stone-200" />
        <span class="text-xs text-stone-400 uppercase tracking-wider">o usa tu correo</span>
        <span class="h-px flex-1 bg-stone-200" />
      </div>

      <!-- Formulario -->
      <form @submit.prevent="handleRegister">
        <!-- Nombre -->
        <div class="mb-4">
          <label class="block text-sm font-semibold text-stone-700 mb-1.5">Nombre completo</label>
          <input
            v-model="form.nombre"
            type="text"
            placeholder="Ej. Juan Pérez"
            required
            class="w-full px-4 py-3 rounded-lg border border-stone-300 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow"
          />
        </div>

        <!-- Email -->
        <div class="mb-4">
          <label class="block text-sm font-semibold text-stone-700 mb-1.5">Correo electrónico</label>
          <div class="relative">
            <input
              v-model="form.email"
              type="email"
              placeholder="juan@mail.com"
              required
              @blur="checkEmailExists"
              class="w-full px-4 py-3 pr-12 rounded-lg border text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow"
              :class="emailStatus === 'taken' ? 'border-red-400' : emailStatus === 'available' ? 'border-emerald-400' : 'border-stone-300'"
            />
            <div class="absolute right-3 top-1/2 -translate-y-1/2">
              <svg v-if="emailStatus === 'checking'" class="w-5 h-5 text-stone-400 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              <svg v-else-if="emailStatus === 'available'" class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <svg v-else-if="emailStatus === 'taken'" class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <p v-if="emailStatus === 'taken'" class="text-red-500 text-xs mt-1">
            Este correo ya está registrado.
          </p>
        </div>

        <!-- Password -->
        <div class="mb-6">
          <label class="block text-sm font-semibold text-stone-700 mb-1.5">Contraseña</label>
          <div class="relative">
            <input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Crea una contraseña segura"
              required
              class="w-full px-4 py-3 pr-12 rounded-lg border border-stone-300 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
            >
              <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.98 8.223A10.477 10.477 0 001.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            </button>
          </div>

          <!-- Barra de fuerza -->
          <div class="h-1 bg-stone-200 rounded-full mt-3 overflow-hidden">
            <div
              class="h-full rounded-full transition-all duration-300"
              :class="strengthBarColor"
              :style="{ width: strengthPercent + '%' }"
            />
          </div>

          <!-- Requisitos -->
          <div class="mt-3 space-y-1">
            <div
              v-for="req in passwordRequirements"
              :key="req.label"
              class="flex items-center gap-2 text-xs transition-colors"
              :class="req.met ? 'text-emerald-600' : 'text-stone-400'"
            >
              <svg v-if="req.met" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <svg v-else class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" />
              </svg>
              {{ req.label }}
            </div>
          </div>
        </div>

        <!-- Error general -->
        <p v-if="error" class="text-red-500 text-sm text-center mb-4">
          {{ error }}
        </p>

        <!-- Submit -->
        <button
          type="submit"
          :disabled="loading || !isFormValid"
          class="w-full py-3 bg-lime-400 hover:bg-lime-500 disabled:opacity-50 disabled:cursor-not-allowed text-stone-900 font-bold text-base rounded-lg transition-colors"
        >
          <span v-if="loading" class="inline-flex items-center gap-2">
            <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Registrando...
          </span>
          <span v-else>Registrarme</span>
        </button>
      </form>

      <!-- Footer -->
      <p class="text-center text-sm text-stone-500 mt-6">
        ¿Ya tienes una cuenta?
        <button
          @click="uiStore.openLogin()"
          class="text-stone-900 font-bold hover:text-emerald-700 transition-colors"
        >
          Inicia sesión aquí
        </button>
      </p>

      <p class="text-center text-xs text-stone-400 mt-4 leading-relaxed border-t border-stone-200 pt-4">
        Al registrarte, confirmas que tienes 18 años o más y aceptas nuestra
        <a href="#" class="underline">Política de Privacidad</a> y
        <a href="#" class="underline">Términos de Uso</a>.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'
import { useUiStore } from '@/stores/ui.store'
import { ROUTE_NAMES } from '@/constants/routes'
import { AUTH } from '@/api/endpoints'
import api from '@/api/axios'

const router = useRouter()
const authStore = useAuthStore()
const uiStore = useUiStore()

const form = reactive({
  nombre: '',
  email: '',
  password: '',
})

const showPassword = ref(false)
const loading = ref(false)
const error = ref('')
const emailStatus = ref('') // '', 'checking', 'available', 'taken'
let emailTimeout = null



const googleLoading = ref(false)

async function handleGoogleLogin() {
  try {
    const { data } = await api.get(AUTH.GOOGLE_REDIRECT)
    window.location.href = data.data.url
  } catch {
    error.value = 'No se pudo conectar con Google'
  }
}
// ── Validación de email en tiempo real
async function checkEmailExists() {
  const email = form.email.trim()
  if (!email || !email.includes('@')) {
    emailStatus.value = ''
    return
  }

  emailStatus.value = 'checking'

  try {
    const exists = await authStore.checkEmail(email)
    emailStatus.value = exists ? 'taken' : 'available'
  } catch {
    emailStatus.value = ''
  }
}

// ── Requisitos de contraseña
const passwordRequirements = computed(() => {
  const p = form.password
  return [
    { label: 'Mínimo 8 caracteres', met: p.length >= 8 },
    { label: 'Una mayúscula', met: /[A-Z]/.test(p) },
    { label: 'Una minúscula', met: /[a-z]/.test(p) },
    { label: 'Un número', met: /[0-9]/.test(p) },
    { label: 'Un carácter especial (@$!%*?&)', met: /[@$!%*?&]/.test(p) },
  ]
})

const metCount = computed(() => passwordRequirements.value.filter((r) => r.met).length)

const strengthPercent = computed(() => (metCount.value / 5) * 100)

const strengthBarColor = computed(() => {
  if (metCount.value <= 1) return 'bg-red-500'
  if (metCount.value <= 2) return 'bg-orange-500'
  if (metCount.value <= 3) return 'bg-yellow-500'
  if (metCount.value <= 4) return 'bg-lime-500'
  return 'bg-emerald-500'
})

const isFormValid = computed(() => {
  return (
    form.nombre.trim().length > 0 &&
    emailStatus.value === 'available' &&
    metCount.value === 5
  )
})

// ── Submit
async function handleRegister() {
  if (!isFormValid.value) return

  error.value = ''
  loading.value = true

  try {
    await authStore.register({
      nombre: form.nombre.trim(),
      email: form.email.trim(),
      password: form.password,
    })
    router.push({
      name: ROUTE_NAMES.VERIFICAR_CODIGO,
      query: { email: form.email.trim() },
    })
  } catch (err) {
    const message = err.response?.data?.message
    error.value = message || 'Ocurrió un error al registrarte'
  } finally {
    loading.value = false
  }
}
</script>
