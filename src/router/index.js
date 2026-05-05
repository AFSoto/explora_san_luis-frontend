// ======================================
// IMPORTACIONES
// ======================================

// Funciones principales de Vue Router
import { createRouter, createWebHistory } from 'vue-router'

// Nombres centralizados de rutas
import { ROUTE_NAMES } from '@/constants/routes'

// Layout público principal
import DefaultLayout from '@/layouts/DefaultLayout.vue'

// ======================================
// CONFIGURACIÓN DEL ROUTER
// ======================================

const router = createRouter({

  // ==================================
  // HISTORIAL HTML5
  // ==================================
  // Permite URLs limpias sin '#'
  history: createWebHistory(import.meta.env.BASE_URL),

  // ==================================
  // SCROLL AUTOMÁTICO
  // ==================================
  // Cada vez que cambia la ruta,
  // la página vuelve al inicio
  scrollBehavior() {
    return { top: 0 }
  },

  // ==================================
  // DEFINICIÓN DE RUTAS
  // ==================================
  routes: [

    // ==================================
    // RUTAS PÚBLICAS
    // ==================================
    {
      path: '/',

      // Layout principal público
      component: DefaultLayout,

      // Rutas hijas
      children: [

        // ==================================
        // HOME
        // ==================================
        {
          path: '',
          name: ROUTE_NAMES.PRINCIPAL,
          component: () => import('@/modules/home/views/PrincipalView.vue'),
        },
        {
          path: 'home',
          name: ROUTE_NAMES.HOME,
          component: () => import('@/modules/home/views/HomeView.vue'),
        },

        // ==================================
        // AUTENTICACIÓN
        // ==================================

        // Login
        {
          path: 'login',
          name: ROUTE_NAMES.LOGIN,
          component: () =>
            import('@/modules/auth/views/LoginView.vue'),
        },

        // Registro
        {
          path: 'register',
          name: ROUTE_NAMES.REGISTER,
          component: () =>
            import('@/modules/auth/views/RegisterView.vue'),
        },

        // Verificar código
        {
          path: 'verificar-codigo',
          name: ROUTE_NAMES.VERIFICAR_CODIGO,
          component: () =>
            import('@/modules/auth/views/VerificarCodigoView.vue'),
        },
        {
          path: 'auth/google/callback',
          name: 'google-callback',
          component: () => import('@/modules/auth/views/GoogleCallbackView.vue'),
        },

        // ==================================
        // CATÁLOGO PÚBLICO
        // ==================================

        // Gastronomía
        {
          path: 'gastronomia',
          name: ROUTE_NAMES.GASTRONOMIA,
          component: () =>
            import('@/modules/gastronomia/views/GastronomiaIndexView.vue'),
        },

        // Alojamiento
        {
          path: 'alojamiento',
          name: ROUTE_NAMES.ALOJAMIENTO,
          component: () =>
            import('@/modules/alojamiento/views/AlojamientoIndexView.vue'),
        },

        // Recreación
        {
          path: 'recreacion',
          name: ROUTE_NAMES.RECREACION,
          component: () =>
            import('@/modules/recreacion/views/RecreacionIndexView.vue'),
        },

        // Transporte
        {
          path: 'transporte',
          name: ROUTE_NAMES.TRANSPORTE,
          component: () =>
            import('@/modules/transporte/views/TransporteIndexView.vue'),
        },

        // Agencias turísticas
        {
          path: 'agencias-turisticas',
          name: ROUTE_NAMES.AGENCIAS,
          component: () =>
            import('@/modules/agencia-turistica/views/AgenciaIndexView.vue'),
        },

        // Sitios turísticos
        {
          path: 'sitios-turisticos',
          name: ROUTE_NAMES.SITIOS_TURISTICOS,
          component: () =>
            import('@/modules/sitios-turisticos/views/SitiosIndexView.vue'),
        },

        // Eventos
        {
          path: 'eventos',
          name: ROUTE_NAMES.EVENTOS,
          component: () =>
            import('@/modules/eventos/views/EventosIndexView.vue'),
        },

        // Historia
        {
          path: 'historia',
          name: ROUTE_NAMES.HISTORIA,
          component: () =>
            import('@/modules/historia/views/HistoriaView.vue'),
        },
      ],
    },

    // ==================================
    // PANEL ADMINISTRATIVO
    // ==================================
    {
      path: '/admin',

      // Layout del administrador
      component: () =>
        import('@/layouts/AdminLayout.vue'),

      // Metadatos de protección
      meta: {

        // Requiere usuario autenticado
        requiresAuth: true,

        // Requiere rol administrador
        requiresAdmin: true,
      },

      // Rutas hijas admin
      children: [

        // ==================================
        // DASHBOARD
        // ==================================
        {
          path: '',
          name: ROUTE_NAMES.ADMIN_DASHBOARD,
          component: () =>
            import('@/modules/admin/views/AdminDashboardView.vue'),
        },

        // ==================================
        // ENTIDADES
        // ==================================
        {
          path: 'entidades',
          name: ROUTE_NAMES.ADMIN_ENTIDADES,
          component: () =>
            import('@/modules/admin/views/AdminEntidadesView.vue'),
        },

        // ==================================
        // SITIOS TURÍSTICOS
        // ==================================
        {
          path: 'sitios-turisticos',
          name: ROUTE_NAMES.ADMIN_SITIOS,
          component: () =>
            import('@/modules/admin/views/AdminSitiosTuristicosView.vue'),
        },

        // ==================================
        // EVENTOS
        // ==================================
        {
          path: 'eventos',
          name: ROUTE_NAMES.ADMIN_EVENTOS,
          component: () =>
            import('@/modules/admin/views/AdminEventosView.vue'),
        },

        // ==================================
        // USUARIOS
        // ==================================
        {
          path: 'usuarios',
          name: ROUTE_NAMES.ADMIN_USUARIOS,
          component: () =>
            import('@/modules/admin/views/AdminUsuariosView.vue'),
        },
      ],
    },
  ],
})

// ======================================
// EXPORTACIÓN DEL ROUTER
// ======================================

export default router
