<template>
  <div
    class="group flex gap-4 sm:gap-5 bg-white rounded-2xl p-4 sm:p-5 ring-1 ring-stone-200/60 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
  >
    <!-- Logo de la entidad -->
    <div class="flex-shrink-0">
      <img
        :src="entidad.imagen || defaultLogo"
        :alt="entidad.nombre_comercial"
        class="w-28 h-28 sm:w-32 sm:h-32 rounded-xl object-cover shadow-sm"
      />
    </div>

    <!-- Información principal -->
    <div class="flex-1 min-w-0">
      <!-- Nombre comercial -->
      <h3 class="font-bold text-stone-900 text-base sm:text-lg mb-1 truncate">
        {{ entidad.nombre_comercial }}
      </h3>

      <!-- Horario de atención -->
      <p
        v-if="entidad.hora_atencion"
        class="text-sm text-stone-500 flex items-center gap-1.5 mb-1"
      >
        <svg
          class="w-4 h-4 text-stone-400 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        {{ entidad.hora_atencion }}
      </p>

      <!-- Dirección -->
      <p
        v-if="entidad.direccion"
        class="text-sm text-stone-500 flex items-center gap-1.5 mb-2"
      >
        <svg
          class="w-4 h-4 text-stone-400 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />

          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>

        <!-- truncate evita que direcciones largas rompan el diseño -->
        <span class="truncate">
          {{ entidad.direccion }}
        </span>
      </p>

      <!-- Botón de WhatsApp -->
      <a
        v-if="entidad.telefono"
        :href="`https://wa.me/57${entidad.telefono}`"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors no-underline"
      >
        <!-- Ícono de WhatsApp -->
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
          />
        </svg>

        WhatsApp
      </a>
    </div>
  </div>
</template>

<script setup>
// Logo por defecto que se muestra cuando la entidad no tiene imagen
import defaultLogo from '@/assets/images/logo.svg'

// Props recibidas desde el componente padre
defineProps({
  entidad: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
/* Evita subrayado en enlaces */
.no-underline {
  text-decoration: none;
}
</style>
