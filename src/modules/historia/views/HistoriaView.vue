<template>
  <div class="bg-stone-50">
    <!-- Hero -->
    <div class="relative h-[350px] md:h-[450px] overflow-hidden">
      <img :src="heroImg" alt="Historia de San Luis" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <div class="max-w-7xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-white">Historia de San Luis</h1>
          <p class="text-lg text-white/80 mt-2">Antioquia, Colombia</p>
        </div>
      </div>
    </div>

    <section class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
      <button @click="$router.back()" class="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-700 mb-10 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Volver
      </button>

      <!-- Fundación -->
      <article class="mb-16">
        <span class="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 mb-3">Orígenes</span>
        <h2 class="text-3xl font-semibold text-stone-900 tracking-tight mb-6">Fundación</h2>
        <div class="prose prose-stone max-w-none">
          <p class="text-stone-600 leading-relaxed text-base">
            San Luis fue fundado en 1875 por el padre Clemente Giraldo. Su nombre fue dado en honor a San Luis Gonzaga, santo patrono del pueblo. Ubicado en el corazón del Oriente antioqueño, el municipio se estableció como un punto estratégico entre Medellín y el Magdalena Medio.
          </p>
          <p class="text-stone-600 leading-relaxed text-base mt-4">
            Los primeros colonos llegaron atraídos por la riqueza de sus tierras y la abundancia de recursos naturales. La madera, la agricultura y la minería artesanal fueron las bases de la economía en sus primeros años.
          </p>
        </div>
      </article>

      <!-- Imagen -->
      <div class="rounded-2xl overflow-hidden mb-16">
        <img :src="culturaImg" alt="Cultura San Luis" class="w-full h-64 md:h-80 object-cover" />
      </div>

      <!-- Cultura -->
      <article class="mb-16">
        <span class="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 mb-3">Identidad</span>
        <h2 class="text-3xl font-semibold text-stone-900 tracking-tight mb-6">Cultura y tradición</h2>
        <div class="prose prose-stone max-w-none">
          <p class="text-stone-600 leading-relaxed text-base">
            San Luis conserva vivas sus raíces campesinas y religiosas. Las fiestas populares, la música típica y el gran sentido comunitario definen la identidad de sus habitantes. Entre sus celebraciones más importantes se encuentran las Fiestas de la Madera, las Fiestas del Retorno y las festividades religiosas de Semana Santa.
          </p>
          <p class="text-stone-600 leading-relaxed text-base mt-4">
            La tradición oral, la gastronomía local y las artesanías en madera son parte fundamental del patrimonio cultural del municipio. Los sanluisanos son reconocidos por su hospitalidad y calidez humana.
          </p>
        </div>
      </article>

      <!-- Economía -->
      <article class="mb-16">
        <span class="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 mb-3">Desarrollo</span>
        <h2 class="text-3xl font-semibold text-stone-900 tracking-tight mb-6">Economía</h2>
        <div class="prose prose-stone max-w-none">
          <p class="text-stone-600 leading-relaxed text-base">
            La economía de San Luis se ha basado históricamente en la agricultura, la ganadería y la producción de madera. En las últimas décadas, el ecoturismo ha emergido como un motor económico importante, gracias a la riqueza natural del municipio.
          </p>
          <p class="text-stone-600 leading-relaxed text-base mt-4">
            Cascadas, ríos cristalinos, cerros y senderos ecológicos atraen cada año a miles de visitantes. Los productos artesanales y la gastronomía local complementan la oferta turística, generando oportunidades de empleo y desarrollo para la comunidad.
          </p>
        </div>
      </article>

      <!-- Datos -->
      <div class="bg-emerald-900 text-white rounded-2xl p-8 md:p-10">
        <h3 class="text-lime-300 text-xs font-semibold uppercase tracking-[0.2em] mb-6">Datos del municipio</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p class="text-2xl font-bold">1875</p>
            <p class="text-sm text-white/70 mt-1">Fundación</p>
          </div>
          <div>
            <p class="text-2xl font-bold">124 Km</p>
            <p class="text-sm text-white/70 mt-1">Desde Medellín</p>
          </div>
          <div>
            <p class="text-2xl font-bold">25-30°C</p>
            <p class="text-sm text-white/70 mt-1">Temperatura</p>
          </div>
          <div>
            <p class="text-2xl font-bold">450 m</p>
            <p class="text-sm text-white/70 mt-1">Altitud</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import heroImg from '@/assets/images/home/cerro_castellon.webp'
import culturaImg from '@/assets/images/home/cultura.webp'
</script>
