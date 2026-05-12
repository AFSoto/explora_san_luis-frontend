<template>
  <aside
    class="fixed inset-y-0 left-0 z-40 flex flex-col bg-stone-900 text-white transition-all duration-300"
    :class="uiStore.sidebarOpen ? 'w-64' : 'w-16'"
  >
    <!-- Logo + Toggle -->
    <div class="flex items-center h-16 border-b border-white/10" :class="uiStore.sidebarOpen ? 'justify-between px-4' : 'justify-center'">
      <div v-if="uiStore.sidebarOpen" class="flex items-center">
        <img :src="logoSrc" alt="Explora San Luis" class="h-9 w-9 object-contain brightness-0 invert flex-shrink-0" />
        <span class="ml-3 font-bold text-sm tracking-wide truncate">Admin Panel</span>
      </div>
      <button
        @click="uiStore.toggleSidebar()"
        class="w-8 h-8 flex items-center justify-center rounded-md text-stone-400 hover:bg-white/10 hover:text-white transition-colors"
      >
        <svg
          class="w-4 h-4 transition-transform duration-300"
          :class="{ 'rotate-180': !uiStore.sidebarOpen }"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg>
      </button>
    </div>

    <!-- Navegación -->
    <nav class="flex-1 py-4 space-y-1 overflow-y-auto">
      <router-link
        v-for="item in navItems"
        :key="item.route"
        :to="{ name: item.route }"
        class="group flex items-center mx-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 no-underline relative"
        :class="isActive(item.route)
          ? 'bg-emerald-700 text-white'
          : 'text-stone-400 hover:bg-white/5 hover:text-white'"
      >
        <div v-html="item.icon" class="w-5 h-5 flex-shrink-0" />
        <Transition name="fade">
          <span v-if="uiStore.sidebarOpen" class="ml-3 truncate">{{ item.label }}</span>
        </Transition>

        <!-- Tooltip cuando está colapsado -->
        <div
          v-if="!uiStore.sidebarOpen"
          class="absolute left-full ml-2 px-2 py-1 bg-stone-800 text-white text-xs rounded-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50"
        >
          {{ item.label }}
        </div>
      </router-link>
    </nav>


  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useUiStore } from '@/stores/ui.store'
import { ROUTE_NAMES } from '@/constants/routes'
import logoSrc from '@/assets/images/logo.svg'

const route = useRoute()
const uiStore = useUiStore()

function isActive(routeName) {
  return route.name === routeName
}

const navItems = [
  {
    label: 'Dashboard',
    route: ROUTE_NAMES.ADMIN_DASHBOARD,
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>',
  },
  {
    label: 'Entidades',
    route: ROUTE_NAMES.ADMIN_ENTIDADES,
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72" /></svg>',
  },
  {
    label: 'Sitios Turísticos',
    route: ROUTE_NAMES.ADMIN_SITIOS,
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>',
  },
  {
    label: 'Eventos',
    route: ROUTE_NAMES.ADMIN_EVENTOS,
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>',
  },
  {
    label: 'Usuarios',
    route: ROUTE_NAMES.ADMIN_USUARIOS,
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>',
  },
]
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
