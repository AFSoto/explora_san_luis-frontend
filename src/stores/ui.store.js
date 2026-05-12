// Importa defineStore de Pinia para crear el store global
import { defineStore } from 'pinia'

// Importa ref de Vue para manejar estado reactivo
import { ref } from 'vue'

// Define el store llamado "ui"
export const useUiStore = defineStore('ui', () => {

  // ── Sidebar Admin
  const sidebarOpen = ref(localStorage.getItem('sidebar_open') !== 'false')

  function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value
    localStorage.setItem('sidebar_open', sidebarOpen.value)
  }

  // Estado reactivo que controla si el modal de login está visible
  const showLoginModal = ref(false)

  // Función para abrir el modal de login
  function openLogin() {
    showLoginModal.value = true
  }

  // Función para cerrar el modal de login
  function closeLogin() {
    showLoginModal.value = false
  }

  // Expone estado y funciones para que puedan usarse
  // desde cualquier componente de la aplicación
  return {
    showLoginModal,
    openLogin,
    closeLogin,
    sidebarOpen,
    toggleSidebar,
  }
})
