<template>

  <!-- ======================================
       FOOTER PRINCIPAL
  ======================================= -->
  <footer class="bg-gray-900 text-white">

    <!-- Contenedor principal -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-6">

      <!-- ==================================
           LOGO FOOTER
      =================================== -->
      <div class="mb-8">

        <!-- Logo con colores invertidos -->
        <img
          :src="logoSrc"
          alt="Explora San Luis"
          class="h-16 w-auto brightness-0 invert"
        />
      </div>

      <!-- Línea separadora -->
      <hr class="border-gray-700 mb-8" />

      <!-- ==================================
           CONTENIDO PRINCIPAL
      =================================== -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

        <!-- ==================================
             COLUMNA 1
             INFORMACIÓN GENERAL
        =================================== -->
        <div>

          <!-- Título -->
          <h5 class="text-lg font-bold mb-4">
            San Luis
          </h5>

          <!-- Descripción -->
          <p class="text-gray-400 text-sm leading-relaxed">
            Descubre la magia de San Luis, Antioquia.
            Donde la naturaleza y la cultura se encuentran.
          </p>
        </div>

        <!-- ==================================
             COLUMNA 2
             LINKS DE EXPLORACIÓN
        =================================== -->
        <div>

          <!-- Título -->
          <h5 class="text-lg font-bold mb-4">
            Explorar
          </h5>

          <!-- Lista de links -->
          <ul class="space-y-2">

            <!-- Sitios turísticos -->
            <li>
              <router-link
                :to="{ name: ROUTE_NAMES.SITIOS_TURISTICOS }"
                class="text-gray-400 text-sm hover:text-lime-400 transition-colors"
              >
                Sitios turísticos
              </router-link>
            </li>

            <!-- Recreación -->
            <li>
              <router-link
                :to="{ name: ROUTE_NAMES.RECREACION }"
                class="text-gray-400 text-sm hover:text-lime-400 transition-colors"
              >
                Recreación
              </router-link>
            </li>

            <!-- Alojamiento -->
            <li>
              <router-link
                :to="{ name: ROUTE_NAMES.ALOJAMIENTO }"
                class="text-gray-400 text-sm hover:text-lime-400 transition-colors"
              >
                Alojamiento
              </router-link>
            </li>

            <!-- Gastronomía -->
            <li>
              <router-link
                :to="{ name: ROUTE_NAMES.GASTRONOMIA }"
                class="text-gray-400 text-sm hover:text-lime-400 transition-colors"
              >
                Gastronomía
              </router-link>
            </li>

            <!-- Eventos -->
            <li>
              <router-link
                :to="{ name: ROUTE_NAMES.EVENTOS }"
                class="text-gray-400 text-sm hover:text-lime-400 transition-colors"
              >
                Eventos
              </router-link>
            </li>
          </ul>
        </div>

        <!-- ==================================
             COLUMNA 3
             CONTACTO
        =================================== -->
        <div>

          <!-- Título -->
          <h5 class="text-lg font-bold mb-4">
            Contáctanos
          </h5>

          <!-- Información de contacto -->
          <ul class="space-y-2">

            <!-- Correo -->
            <li class="text-gray-400 text-sm">
              info@explorasanluis.com
            </li>

            <!-- Ubicación -->
            <li class="text-gray-400 text-sm">
              San Luis, Antioquia
            </li>
          </ul>
        </div>

        <!-- ==================================
             COLUMNA 4
             REDES SOCIALES
        =================================== -->
        <div class="lg:text-right">

          <!-- Título -->
          <h5 class="text-lg font-bold mb-4">
            Síguenos
          </h5>

          <!-- Contenedor redes -->
          <div class="flex lg:justify-end gap-4">

            <!-- WhatsApp -->
            <a
              href="#"
              class="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
            >

              <!-- Ícono WhatsApp -->
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.126 1.527 5.86L.05 23.708l5.997-1.572A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.645-.5-5.168-1.378l-.37-.22-3.835 1.006 1.023-3.735-.24-.382A9.72 9.72 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/>
              </svg>
            </a>

            <!-- Instagram -->
            <a
              href="#"
              class="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
            >

              <!-- Ícono Instagram -->
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
              </svg>
            </a>

            <!-- Facebook -->
            <a
              href="#"
              class="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
            >

              <!-- Ícono Facebook -->
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- ==================================
           COPYRIGHT
      =================================== -->

      <!-- Línea separadora -->
      <hr class="border-gray-700 mb-6" />

      <!-- Texto copyright -->
      <p class="text-center text-gray-500 text-sm">
        © {{ currentYear }}
        Explora San Luis — Antioquia.
        Todos los derechos reservados.
      </p>
    </div>
  </footer>
</template>

<script setup>

// ======================================
// IMPORTACIONES
// ======================================

// Nombres centralizados de rutas
import { ROUTE_NAMES } from '@/constants/routes'

// Logo de la aplicación
import logoSrc from '@/assets/images/logo.svg'

// ======================================
// AÑO ACTUAL
// ======================================

// Obtiene automáticamente el año actual
// para mostrarlo en el copyright
const currentYear = new Date().getFullYear()

</script>
