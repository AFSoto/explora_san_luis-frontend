<template>
  <!-- Contenedor principal centrado vertical y horizontalmente -->
  <div class="min-h-[80vh] flex items-center justify-center">

    <!-- Caja de contenido -->
    <div class="text-center">

      <!-- Spinner mientras no exista error -->
      <svg
        v-if="!errorMsg"
        class="w-10 h-10 text-emerald-500 animate-spin mx-auto mb-4"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>

      <!-- Mensaje mientras se autentica -->
      <p v-if="!errorMsg" class="text-stone-500">
        Autenticando con Google...
      </p>

      <!-- Mensaje de error -->
      <p v-else class="text-red-500">
        {{ errorMsg }}
      </p>

    </div>
  </div>
</template>

<script setup>

// Importa herramientas reactivas y ciclo de vida de Vue
import { ref, onMounted } from 'vue'

// Importa acceso a la ruta actual y navegación
import { useRoute, useRouter } from 'vue-router'

// Store de autenticación
import { useAuthStore } from '@/stores/auth.store'

// Nombres centralizados de rutas
import { ROUTE_NAMES } from '@/constants/routes'

// Obtiene acceso a la URL actual
const route = useRoute()

// Permite redireccionar programáticamente
const router = useRouter()

// Store global de autenticación
const authStore = useAuthStore()

// Estado reactivo para mensajes de error
const errorMsg = ref('')

// Se ejecuta cuando el componente se monta
onMounted(async () => {

  // Obtiene token enviado desde backend
  const token = route.query.token

  // Obtiene posible error enviado desde backend
  const error = route.query.error

  // Si backend retornó error
  if (error) {
    errorMsg.value = 'No se pudo autenticar con Google'
    return
  }

  // Si no llegó token
  if (!token) {
    errorMsg.value = 'No se recibió el token'
    return
  }

  // Guarda token en localStorage
  localStorage.setItem('auth_token', token)

  // Actualiza token en el store
  authStore.token = token

  // Verifica sesión consultando backend
  const success = await authStore.checkAuth()

  // Si el token es válido
  if (success) {

    // Redirige al home
    router.push({ name: ROUTE_NAMES.HOME })

  } else {

    // Muestra error si token inválido
    errorMsg.value = 'Token inválido'
  }
})
</script>
