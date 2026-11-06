import type { EmergencyContact } from '../types'

// Numbers checked on 2026-11-06 (exteriores.gob.es for the Embassy and Consulate).
export const emergencyContacts: EmergencyContact[] = [
  {
    label: 'Emergencias (general, UE)',
    value: '112',
    phone: '112',
    info: 'Número único europeo para policía, bomberos y ambulancia. Atienden en varios idiomas.',
  },
  {
    label: 'SNS 24 (consejo médico)',
    value: '808 24 24 24',
    phone: '+351808242424',
    info: 'Línea de la sanidad pública portuguesa, 24 horas, para problemas de salud que no son una emergencia.',
  },
  {
    label: 'Embajada de España en Lisboa',
    value: '+351 213 472 381',
    phone: '+351213472381',
    info: 'Rua do Salitre 1, 1269-052 Lisboa (Palácio Lima Mayer).',
  },
  {
    label: 'Emergencia consular (fuera de horario)',
    value: '+351 917 267 402',
    phone: '+351917267402',
    info: 'Solo para urgencias graves como accidentes, detenciones o robos fuera del horario de oficina.',
  },
  {
    label: 'Consulado General de España',
    value: '+351 213 220 500',
    phone: '+351213220500',
    info: 'Rua do Salitre 3, 1269-052 Lisboa. Para pasaportes perdidos o robados y trámites.',
  },
  {
    label: 'Hospital de São José',
    value: '+351 218 841 000',
    phone: '+351218841000',
    info: 'Rua José António Serrano, 1150-199 Lisboa. Gran hospital público con urgencias en el centro.',
  },
]

export const emergencyTips: string[] = [
  'Llevad la Tarjeta Sanitaria Europea (TSE): con ella os atienden en la sanidad pública portuguesa.',
  'En el tranvía 28 y en las zonas con mucha gente hay carteristas: mochila delante y móvil guardado.',
  'Las farmacias tienen una cruz verde. En la puerta indican cuál está de guardia.',
  'Guardad una foto del pasaporte o DNI en el móvil y anotad la dirección del alojamiento.',
]
