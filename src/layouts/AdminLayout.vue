<template>
  <div class="min-h-screen flex bg-stone-100">
    <AdminSidebar />

    <div
      class="flex-1 flex flex-col transition-all duration-300"
      :class="uiStore.sidebarOpen ? 'ml-64' : 'ml-16'"
    >
      <AdminTopbar />

      <main class="flex-1 p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { useUiStore } from '@/stores/ui.store'
import AdminSidebar from '@/modules/admin/components/AdminSidebar.vue'
import AdminTopbar from '@/modules/admin/components/AdminTopbar.vue'

const uiStore = useUiStore()
</script>
