// ======================================
// NOMBRES DE RUTAS DE LA APLICACIÓN
// ======================================
// Centraliza los nombres de las rutas
// para evitar escribir strings repetidos
// directamente en el proyecto.
//
// Ejemplo:
// router.push({ name: ROUTE_NAMES.LOGIN })
//
export const ROUTE_NAMES = {

  // ==================================
  // RUTAS PÚBLICAS
  // ==================================

  // Página principal
  HOME: 'home',

  // Página de inicio de sesión
  LOGIN: 'login',

  // Página de registro
  REGISTER: 'register',

  // Página para verificar código
  VERIFICAR_CODIGO: 'verificar-codigo',

  // Página de gastronomía
  GASTRONOMIA: 'gastronomia',

  // Página de alojamientos
  ALOJAMIENTO: 'alojamiento',

  // Página de recreación
  RECREACION: 'recreacion',

  // Página de transporte
  TRANSPORTE: 'transporte',

  // Página de agencias turísticas
  AGENCIAS: 'agencias-turisticas',

  // Página de sitios turísticos
  SITIOS_TURISTICOS: 'sitios-turisticos',

  // Página de eventos
  EVENTOS: 'eventos',

  // Página de historia
  HISTORIA: 'historia',

  // ==================================
  // RUTAS DEL PANEL ADMINISTRATIVO
  // ==================================

  // Dashboard principal del administrador
  ADMIN_DASHBOARD: 'admin-dashboard',

  // Gestión de entidades
  ADMIN_ENTIDADES: 'admin-entidades',

  // Gestión de sitios turísticos
  ADMIN_SITIOS: 'admin-sitios',

  // Gestión de eventos
  ADMIN_EVENTOS: 'admin-eventos',

  // Gestión de usuarios
  ADMIN_USUARIOS: 'admin-usuarios',
}
