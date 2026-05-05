<template>
  <!-- ======================================
       CONTENEDOR PRINCIPAL DE RUTAS
  ======================================= -->
  <!--
    router-view renderiza automáticamente
    el componente correspondiente
    a la ruta actual.
  -->
  <router-view />
</template>

<script setup>
// ======================================
// IMPORTACIONES
// ======================================

// Hook del ciclo de vida de Vue
import { onMounted } from 'vue'

// Store de autenticación
import { useAuthStore } from '@/stores/auth.store'

import { useCatalogoStore } from '@/stores/catalogo.store'

// ======================================
// STORE AUTH
// ======================================

// Instancia del store de autenticación
const authStore = useAuthStore()

const catalogoStore = useCatalogoStore()

// ======================================
// CICLO DE VIDA
// ======================================

// Cuando App.vue se monta:
// - Verifica si existe una sesión activa
// - Intenta obtener el usuario autenticado
// - Mantiene la sesión al recargar la página
//
onMounted(() => {
  authStore.checkAuth()
  catalogoStore.fetchTipos()
})
</script>
