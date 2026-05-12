<template>
  <header class="sticky top-0 z-30 bg-white border-b border-stone-200 h-16 flex items-center justify-between px-6">
    <!-- Toggle mobile -->
    <button
      @click="uiStore.toggleSidebar()"
      class="lg:hidden p-2 text-stone-500 hover:text-stone-700 transition-colors"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <div class="hidden lg:block" />

    <!-- Zona derecha -->
    <div class="flex items-center gap-4">
      <router-link
        :to="{ name: ROUTE_NAMES.HOME }"
        class="text-sm text-stone-500 hover:text-emerald-700 transition-colors no-underline flex items-center gap-1.5"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
        Ver sitio
      </router-link>

      <div class="h-5 w-px bg-stone-200" />

      <!-- Usuario -->
      <div class="flex items-center gap-2.5">
        <div class="text-right hidden sm:block">
          <p class="text-sm font-semibold text-stone-700 leading-tight">{{ firstName }}</p>
          <p class="text-xs text-stone-400">Administrador</p>
        </div>
        <div class="w-9 h-9 bg-emerald-600 rounded-full flex items-center justify-center">
          <span class="text-white text-sm font-bold">{{ userInitial }}</span>
        </div>
      </div>

      <!-- Logout -->
      <button
        @click="handleLogout"
        class="p-2 text-stone-400 hover:text-red-500 transition-colors"
        title="Cerrar sesión"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'
import { useUiStore } from '@/stores/ui.store'
import { ROUTE_NAMES } from '@/constants/routes'

const router = useRouter()
const authStore = useAuthStore()
const uiStore = useUiStore()

const firstName = computed(() => authStore.user?.nombre?.split(' ')[0] || 'Admin')
const userInitial = computed(() => authStore.user?.nombre?.charAt(0).toUpperCase() || 'A')

async function handleLogout() {
  await authStore.logout()
  router.push({ name: ROUTE_NAMES.PRINCIPAL })
}
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}
</style>
