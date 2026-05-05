<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="uiStore.showLoginModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-black/50 backdrop-blur-sm"
          @click="uiStore.closeLogin"
        />

        <!-- Modal -->
        <div class="relative bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl">
          <!-- Cerrar -->
          <button
            @click="uiStore.closeLogin"
            class="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Título -->
          <h2 class="text-2xl font-bold text-stone-900 text-center mb-6">Iniciar sesión</h2>

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
            Continuar con Google
          </button>

          <!-- Separador -->
          <div class="flex items-center gap-3 mb-6">
            <span class="h-px flex-1 bg-stone-200" />
            <span class="text-xs text-stone-400 uppercase tracking-wider">o</span>
            <span class="h-px flex-1 bg-stone-200" />
          </div>

          <!-- Formulario -->
          <form @submit.prevent="handleLogin">
            <!-- Email -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-stone-700 mb-1.5">
                Correo electrónico
              </label>
              <input
                v-model="form.email"
                type="email"
                placeholder="juan@mail.com"
                required
                class="w-full px-4 py-3 rounded-lg border border-stone-300 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow"
              />
            </div>

            <!-- Password -->
            <div class="mb-6">
              <div class="flex items-center justify-between mb-1.5">
                <label class="text-sm font-semibold text-stone-700">Contraseña</label>
              </div>
              <div class="relative">
                <input
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="········"
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
            </div>

            <!-- Error -->
            <p v-if="error" class="text-red-500 text-sm text-center mb-4">
              {{ error }}
            </p>

            <!-- Submit -->
            <button
              type="submit"
              :disabled="loading"
              class="w-full py-3 bg-lime-400 hover:bg-lime-500 disabled:opacity-50 disabled:cursor-not-allowed text-stone-900 font-bold text-base rounded-lg transition-colors"
            >
              <span v-if="loading" class="inline-flex items-center gap-2">
                <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                Iniciando...
              </span>
              <span v-else>Iniciar sesión</span>
            </button>
          </form>

          <!-- Footer -->
          <p class="text-center text-sm text-stone-500 mt-6">
            ¿Eres nuevo?
            <router-link
              :to="{ name: ROUTE_NAMES.REGISTER }"
              class="text-stone-900 font-bold hover:text-emerald-700 transition-colors"
              @click="uiStore.closeLogin"
            >
              Crear una cuenta
            </router-link>
          </p>

          <p class="text-center text-xs text-stone-400 mt-4 leading-relaxed">
            Al continuar, confirmas que tienes 18 años o más y aceptas nuestra
            <a href="#" class="underline">Política de Privacidad</a> y
            <a href="#" class="underline">Términos de Uso</a>.
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, reactive } from 'vue'
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
  email: '',
  password: '',
})

const showPassword = ref(false)
const loading = ref(false)
const error = ref('')

// Estado reactivo para controlar el loading del botón de Google
const googleLoading = ref(false)

// Función que inicia el proceso de login con Google
async function handleGoogleLogin() {
  try {
    const { data } = await api.get(AUTH.GOOGLE_REDIRECT)
    window.location.href = data.data.url
  } catch {
    error.value = 'No se pudo conectar con Google'
  }
}
async function handleLogin() {
  error.value = ''
  loading.value = true

  try {
    await authStore.login(form)
    uiStore.closeLogin()
    form.email = ''
    form.password = ''
  } catch (err) {
    const message = err.response?.data?.message
    error.value = message || 'Ocurrió un error al iniciar sesión'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .relative {
  transform: scale(0.95) translateY(10px);
  opacity: 0;
}
.modal-leave-to .relative {
  transform: scale(0.95) translateY(10px);
  opacity: 0;
}
</style>
