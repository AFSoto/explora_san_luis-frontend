// ======================================
// IMPORTACIONES
// ======================================

// Instancia personalizada de Axios
import api from '@/api/axios'

// Endpoints públicos de la API
import { PUBLIC } from '@/api/endpoints'

// ======================================
// SERVICIOS PÚBLICOS
// ======================================
// Este archivo contiene funciones para
// consumir endpoints públicos del backend.

// ======================================
// OBTENER SITIOS TURÍSTICOS
// ======================================
// Realiza una petición GET para obtener
// la lista de sitios turísticos.
//
export function getSitiosTuristicos() {

  return api.get(PUBLIC.SITIOS_TURISTICOS)
}

// ======================================
// OBTENER EVENTOS
// ======================================
// Realiza una petición GET para obtener
// la lista de eventos.
//
export function getEventos() {

  return api.get(PUBLIC.EVENTOS)
}
