<template>
  <div class="relative mt-8 mb-8">
    <!-- Etiqueta flotante del bloque -->
    <div
      class="absolute -top-3 left-4 bg-stone-100 border border-stone-300 px-3 py-0.5 text-xs font-bold text-stone-600 uppercase tracking-wider z-10"
    >
      Tipo de establecimiento
    </div>

    <!-- Contenedor principal de filtros -->
    <div class="border border-stone-300 bg-stone-50 rounded-lg p-5 pt-7">
      <!-- Grid responsive para mostrar los subtipos -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        <label
          v-for="subtipo in subtipos"
          :key="subtipo.id"
          class="flex items-center gap-2.5 cursor-pointer group"
        >
          <!-- Checkbox -->
          <input
            type="checkbox"


            :checked="isSelected(subtipo.id)"

            
            @change="$emit('toggle', subtipo.id)"

            class="w-5 h-5 rounded border-stone-300 text-emerald-600 focus:ring-emerald-500 focus:ring-2 cursor-pointer"
          />

          <!-- Nombre del subtipo -->
          <span
            class="text-sm text-stone-700 group-hover:text-emerald-700 transition-colors"
          >
            {{ subtipo.nombre }}
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
// Props recibidas desde el componente padre
const props = defineProps({
  // Lista de subtipos disponibles
  subtipos: {
    type: Array,
    required: true,
  },

  // IDs de los subtipos seleccionados
  seleccionados: {
    type: Array,
    required: true,
  },
})

// Evento emitido al padre cuando se selecciona o deselecciona un subtipo
defineEmits(['toggle'])

// Verifica si un subtipo está actualmente seleccionado
function isSelected(id) {
  return props.seleccionados.includes(id)
}
</script>
