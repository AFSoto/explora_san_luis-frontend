<template>
  <!-- Solo se muestra la paginación si hay más de una página -->
  <div
    v-if="totalPaginas > 1"
    class="flex items-center justify-center gap-6 mt-10 pt-4"
  >
    <!-- Botón página anterior -->
    <button
      @click="$emit('prev')"


      :disabled="!hasPrev"

      class="p-2 text-stone-700 hover:text-emerald-700 disabled:text-stone-300 disabled:cursor-not-allowed transition-colors"
    >
      <!-- Ícono flecha izquierda -->
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    <!-- Información de la página actual -->
    <span class="font-bold text-stone-900">
      {{ paginaActual }} de {{ totalPaginas }}
    </span>

    <!-- Botón página siguiente -->
    <button
      @click="$emit('next')"

      
      :disabled="!hasNext"

      class="p-2 text-stone-700 hover:text-emerald-700 disabled:text-stone-300 disabled:cursor-not-allowed transition-colors"
    >
      <!-- Ícono flecha derecha -->
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
// Props recibidas desde el componente padre
defineProps({
  // Página actual
  paginaActual: {
    type: Number,
    required: true,
  },

  // Total de páginas disponibles
  totalPaginas: {
    type: Number,
    required: true,
  },

  // Indica si existe una página anterior
  hasPrev: {
    type: Boolean,
    required: true,
  },

  // Indica si existe una página siguiente
  hasNext: {
    type: Boolean,
    required: true,
  },
})

// Eventos emitidos al componente padre
defineEmits([
  // Evento para ir a la página anterior
  'prev',

  // Evento para ir a la página siguiente
  'next',
])
</script>
