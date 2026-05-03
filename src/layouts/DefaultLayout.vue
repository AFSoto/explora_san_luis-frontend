<template>

  <!-- ======================================
       LAYOUT PRINCIPAL PÚBLICO
  ======================================= -->
  <!--
    Este layout envuelve las páginas públicas
    de la aplicación.

    Incluye:
    - Header
    - Contenido dinámico de rutas
    - Footer
  -->

  <div class="min-h-screen flex flex-col bg-gray-50">

    <!-- ==================================
         HEADER
    =================================== -->
    <!-- Barra de navegación principal -->
    <TheHeader />

    <!-- ==================================
         CONTENIDO PRINCIPAL
    =================================== -->
    <main class="flex-1">

      <!--
        router-view renderiza automáticamente
        el componente correspondiente a la ruta actual.
      -->
      <router-view />
    </main>

    <!-- ==================================
         FOOTER
    =================================== -->
    <!-- Pie de página principal -->
    <TheFooter />
  </div>
</template>

<script setup>

// ======================================
// IMPORTACIONES
// ======================================

// Componente del header principal
import TheHeader from '@/components/shared/TheHeader.vue'

// Componente del footer principal
import TheFooter from '@/components/shared/TheFooter.vue'

</script>
