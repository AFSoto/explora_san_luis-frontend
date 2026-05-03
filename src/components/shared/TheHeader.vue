<template>
  <!-- ======================================
       HEADER PRINCIPAL
  ======================================= -->
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
    <!-- Contenedor principal del navbar -->
    <nav class="max-w-7xl mx-auto px-4 sm:px-6">
      <!-- Barra principal -->
      <div class="flex items-center justify-between h-16">
        <!-- ==================================
             LOGO
        =================================== -->
        <router-link to="/" class="flex-shrink-0">
          <!-- Logo de la aplicación -->
          <img :src="logoSrc" alt="Explora San Luis" class="h-14 w-auto object-contain" />
        </router-link>

        <!-- ==================================
             MENÚ DESKTOP
        =================================== -->
        <div class="hidden lg:flex items-center gap-1">
          <!-- Inicio -->
          <router-link
            :to="{ name: ROUTE_NAMES.HOME }"
            class="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors"
          >
            Inicio
          </router-link>

          <!-- Sitios turísticos -->
          <router-link
            :to="{ name: ROUTE_NAMES.SITIOS_TURISTICOS }"
            class="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors"
          >
            Sitios turísticos
          </router-link>

          <!-- Eventos -->
          <router-link
            :to="{ name: ROUTE_NAMES.EVENTOS }"
            class="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors"
          >
            Eventos
          </router-link>

          <!-- ==================================
               DROPDOWN DE CATEGORÍAS
          =================================== -->
          <div class="relative" ref="dropdownRef">
            <!-- Botón para abrir/cerrar dropdown -->
            <button
              @click="showCategories = !showCategories"
              class="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors"
            >
              Categorías

              <!-- Ícono flecha -->
              <svg
                class="w-4 h-4 transition-transform"
                :class="{ 'rotate-180': showCategories }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <!-- Menú desplegable -->
            <div
              v-if="showCategories"
              class="absolute top-full right-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
            >
              <!-- Lista dinámica de categorías -->
              <router-link
                v-for="item in categoryLinks"
                :key="item.route"
                :to="{ name: item.route }"
                class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors"
                @click="showCategories = false"
              >
                {{ item.label }}
              </router-link>
            </div>
          </div>

          <!-- Historia -->
          <router-link
            :to="{ name: ROUTE_NAMES.HISTORIA }"
            class="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors"
          >
            Historia
          </router-link>
        </div>

        <!-- ==================================
             ZONA DE USUARIO DESKTOP
        =================================== -->
        <div class="hidden lg:flex items-center gap-3">
          <!-- Usuario autenticado -->
          <template v-if="authStore.isAuthenticated">
            <!-- Dropdown usuario -->
            <div class="relative" ref="userDropdownRef">
              <!-- Botón usuario -->
              <button
                @click="showUserMenu = !showUserMenu"
                class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <!-- Nombre usuario -->
                <span class="text-sm font-medium text-gray-700"> Hola, {{ firstName }} </span>

                <!-- Avatar -->
                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span class="text-white text-sm font-bold">
                    {{ userInitial }}
                  </span>
                </div>
              </button>

              <!-- Menú desplegable usuario -->
              <div
                v-if="showUserMenu"
                class="absolute top-full right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
              >
                <!-- Panel admin -->
                <router-link
                  v-if="authStore.isAdmin"
                  :to="{ name: ROUTE_NAMES.ADMIN_DASHBOARD }"
                  class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                  @click="showUserMenu = false"
                >
                  Panel Admin
                </router-link>

                <!-- Logout -->
                <button
                  @click="handleLogout"
                  class="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50"
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          </template>

          <!-- Usuario NO autenticado -->
          <template v-else>
            <!-- Login -->
            <router-link
              :to="{ name: ROUTE_NAMES.LOGIN }"
              class="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors"
            >
              Iniciar sesión
            </router-link>

            <!-- Registro -->
            <router-link
              :to="{ name: ROUTE_NAMES.REGISTER }"
              class="px-4 py-2 bg-lime-400 hover:bg-lime-500 text-gray-900 text-sm font-bold rounded-lg transition-colors"
            >
              Crear cuenta
            </router-link>
          </template>
        </div>

        <!-- ==================================
             BOTÓN HAMBURGUESA MOBILE
        =================================== -->
        <button
          @click="showMobileMenu = !showMobileMenu"
          class="lg:hidden p-2 text-gray-600 hover:text-gray-900"
        >
          <!-- Ícono menú -->
          <svg
            v-if="!showMobileMenu"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <!-- Ícono cerrar -->
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- ==================================
           MENÚ MOBILE
      =================================== -->
      <div v-if="showMobileMenu" class="lg:hidden border-t border-gray-100 py-4 space-y-1">
        <!-- Aquí van los links mobile -->
        <!-- La lógica es igual al menú desktop -->
      </div>
    </nav>
  </header>
</template>

<script setup>
// ======================================
// IMPORTACIONES
// ======================================

// Funciones reactivas y hooks de Vue
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Router de Vue
import { useRouter } from 'vue-router'

// Store de autenticación
import { useAuthStore } from '@/stores/auth.store'

// Nombres centralizados de rutas
import { ROUTE_NAMES } from '@/constants/routes'

// Logo de la aplicación
import logoSrc from '@/assets/images/logo.svg'

// ======================================
// INSTANCIAS
// ======================================

// Instancia del router
const router = useRouter()

// Instancia del store auth
const authStore = useAuthStore()

// ======================================
// ESTADO REACTIVO
// ======================================

// Controla dropdown de categorías
const showCategories = ref(false)

// Controla dropdown usuario
const showUserMenu = ref(false)

// Controla menú mobile
const showMobileMenu = ref(false)

// Referencia al dropdown categorías
const dropdownRef = ref(null)

// Referencia dropdown usuario
const userDropdownRef = ref(null)

// ======================================
// COMPUTED
// ======================================

// Obtiene el primer nombre del usuario
const firstName = computed(() => {
  return authStore.user?.nombre?.split(' ')[0] || 'Usuario'
})

// Obtiene la inicial del usuario
const userInitial = computed(() => {
  return authStore.user?.nombre?.charAt(0).toUpperCase() || 'U'
})

// ======================================
// LINKS DE CATEGORÍAS
// ======================================

// Lista dinámica de categorías
const categoryLinks = [
  { label: 'Gastronomía', route: ROUTE_NAMES.GASTRONOMIA },
  { label: 'Recreación', route: ROUTE_NAMES.RECREACION },
  { label: 'Alojamiento', route: ROUTE_NAMES.ALOJAMIENTO },
  { label: 'Transporte', route: ROUTE_NAMES.TRANSPORTE },
  { label: 'Agencias turísticas', route: ROUTE_NAMES.AGENCIAS },
]

// ======================================
// LOGOUT
// ======================================

// Cierra sesión del usuario
async function handleLogout() {
  // Cierra dropdowns
  showUserMenu.value = false
  showMobileMenu.value = false

  // Ejecuta logout en store
  await authStore.logout()

  // Redirige al home
  router.push({
    name: ROUTE_NAMES.HOME,
  })
}

// ======================================
// CERRAR DROPDOWNS
// ======================================

// Detecta clicks fuera de los dropdowns
function handleClickOutside(e) {
  // Dropdown categorías
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    showCategories.value = false
  }

  // Dropdown usuario
  if (userDropdownRef.value && !userDropdownRef.value.contains(e.target)) {
    showUserMenu.value = false
  }
}

// ======================================
// CICLO DE VIDA
// ======================================

// Agrega listener al montar componente
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

// Elimina listener al desmontar componente
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
