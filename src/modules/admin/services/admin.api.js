import api from '@/api/axios'
import { ADMIN } from '@/api/endpoints'

// Dashboard
export function getStats() {
  return api.get(ADMIN.DASHBOARD_STATS)
}

// Entidades
export function getEntidades(params = {}) {
  return api.get(ADMIN.ENTIDADES, { params })
}

export function createEntidad(formData) {
  return api.post(ADMIN.ENTIDADES, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export function updateEntidad(id, formData) {
  formData.append('_method', 'PUT')
  return api.post(ADMIN.ENTIDAD(id), formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export function toggleEntidadEstado(id) {
  return api.patch(ADMIN.ENTIDAD_ESTADO(id))
}

// Sitios Turísticos
export function getSitiosAdmin(params = {}) {
  return api.get(ADMIN.SITIOS, { params })
}

export function createSitio(formData) {
  return api.post(ADMIN.SITIOS, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export function updateSitio(id, formData) {
  formData.append('_method', 'PUT')
  return api.post(ADMIN.SITIO(id), formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export function toggleSitioEstado(id) {
  return api.patch(ADMIN.SITIO_ESTADO(id))
}

// Eventos
export function getEventosAdmin(params = {}) {
  return api.get(ADMIN.EVENTOS, { params })
}

export function createEvento(data) {
  return api.post(ADMIN.EVENTOS, data)
}

export function updateEvento(id, data) {
  return api.put(ADMIN.EVENTO(id), data)
}

// Usuarios
export function getUsuarios(params = {}) {
  return api.get(ADMIN.USUARIOS, { params })
}

export function toggleUsuarioEstado(id) {
  return api.patch(ADMIN.USUARIO_ESTADO(id))
}
