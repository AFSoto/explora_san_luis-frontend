// Importa la función para definir la configuración de Vite
import { defineConfig } from 'vite'

// Plugin oficial para trabajar con Vue 3 en Vite
import vue from '@vitejs/plugin-vue'

// Plugin oficial de Tailwind CSS para Vite
import tailwindcss from '@tailwindcss/vite'

// Utilidades de Node.js para manejar rutas y URLs
import { fileURLToPath, URL } from 'node:url'

// Exporta la configuración principal de Vite
export default defineConfig({

  // Plugins que usará el proyecto
  plugins: [

    // Habilita soporte para archivos .vue
    vue(),

    // Integra Tailwind CSS con Vite
    tailwindcss(),
  ],

  // Configuración de resolución de rutas
  resolve: {
    alias: {

      // Permite usar '@' como alias de la carpeta src
      // Ejemplo:
      // import MiComponente from '@/components/MiComponente.vue'
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // Configuración del servidor de desarrollo
  server: {

    // Puerto donde correrá el frontend
    port: 5173,

    // Configuración de proxy para evitar problemas de CORS
    proxy: {

      // Todas las peticiones que empiecen por '/api'
      // serán redirigidas al backend Laravel
      '/api': {

        // URL del servidor backend
        target: 'http://localhost:8000',

        // Cambia el origen de la petición al del servidor destino
        changeOrigin: true,
      },
    },
  },
})
