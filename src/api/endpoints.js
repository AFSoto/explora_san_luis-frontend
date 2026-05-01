// ======================================
// ENDPOINTS DE AUTENTICACIÓN
// ======================================
// Contiene todas las rutas relacionadas
// con login, registro y autenticación
export const AUTH = {

  // Iniciar sesión
  LOGIN: '/auth/login',

  // Registrar usuario
  REGISTER: '/auth/register',

  // Verificar código enviado al correo
  VERIFICAR_CODIGO: '/auth/verificar-codigo',

  // Validar si un email ya existe
  CHECK_EMAIL: '/auth/check-email',

  // Cerrar sesión
  LOGOUT: '/auth/logout',

  // Obtener usuario autenticado
  ME: '/auth/me',

  // Redirección a login con Google
  GOOGLE_REDIRECT: '/auth/google/redirect',

  // Callback de Google OAuth
  GOOGLE_CALLBACK: '/auth/google/callback',
}

// ======================================
// ENDPOINTS PÚBLICOS
// ======================================
// Rutas accesibles sin autenticación
export const PUBLIC = {

  // Obtener tipos de entidades
  TIPOS: '/tipos',

  // Obtener entidades por slug
  // Ejemplo: /entidades/gastronomia
  ENTIDADES: (slug) => `/entidades/${slug}`,

  // Obtener sitios turísticos
  SITIOS_TURISTICOS: '/sitios-turisticos',

  // Obtener eventos públicos
  EVENTOS: '/eventos',
}

// ======================================
// ENDPOINTS DEL PANEL ADMINISTRATIVO
// ======================================
// Rutas protegidas para administradores
export const ADMIN = {

  // Estadísticas del dashboard
  DASHBOARD_STATS: '/admin/dashboard/stats',

  // =========================
  // ENTIDADES
  // =========================

  // Listar o crear entidades
  ENTIDADES: '/admin/entidades',

  // Obtener, actualizar o eliminar una entidad
  ENTIDAD: (id) => `/admin/entidades/${id}`,

  // Cambiar estado de una entidad
  ENTIDAD_ESTADO: (id) => `/admin/entidades/${id}/estado`,

  // Subir imagen de una entidad
  ENTIDAD_IMAGEN: (id) => `/admin/entidades/${id}/imagen`,

  // =========================
  // SITIOS TURÍSTICOS
  // =========================

  // Listar o crear sitios turísticos
  SITIOS: '/admin/sitios-turisticos',

  // Obtener, actualizar o eliminar un sitio
  SITIO: (id) => `/admin/sitios-turisticos/${id}`,

  // Cambiar estado de un sitio turístico
  SITIO_ESTADO: (id) => `/admin/sitios-turisticos/${id}/estado`,

  // =========================
  // EVENTOS
  // =========================

  // Listar o crear eventos
  EVENTOS: '/admin/eventos',

  // Obtener, actualizar o eliminar evento
  EVENTO: (id) => `/admin/eventos/${id}`,

  // =========================
  // USUARIOS
  // =========================

  // Listar usuarios
  USUARIOS: '/admin/usuarios',

  // Cambiar estado de usuario
  USUARIO_ESTADO: (id) => `/admin/usuarios/${id}/estado`,

  // =========================
  // TIPOS
  // =========================

  // Subir imagen para un tipo
  TIPO_IMAGEN: (id) => `/admin/tipos/${id}/imagen`,
}
