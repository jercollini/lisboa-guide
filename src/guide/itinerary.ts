import type { ItineraryDay } from '../types'

export const itinerary: ItineraryDay[] = [
  {
    day: 1,
    title: 'Baixa, Alfama y el castillo',
    summary: 'El corazón de Lisboa, de la plaza junto al río a lo alto de la colina.',
    stops: [
      { time: 'Mañana', text: 'Empezad en la Praça do Comércio y subid por la Rua Augusta, la calle peatonal de la Baixa.', placeId: 'praca-comercio' },
      { time: 'Mañana', text: 'Vistas desde la pasarela del Elevador de Santa Justa.', placeId: 'santa-justa' },
      { time: 'Mediodía', text: 'Pasad por la Catedral y comed en una tasca de Alfama.', placeId: 'se' },
      { time: 'Tarde', text: 'Murallas y jardines del Castillo de San Jorge.', placeId: 'castelo' },
      { time: 'Noche', text: 'Atardecer en el mirador de Santa Luzia y cena con fado en Alfama.', placeId: 'santa-luzia' },
    ],
  },
  {
    day: 2,
    title: 'Belém y el río',
    summary: 'Los monumentos de los descubrimientos y la Lisboa más moderna.',
    stops: [
      { time: 'Mañana', text: 'Tranvía 15 hasta Belém y visita al Monasterio de los Jerónimos.', placeId: 'jeronimos' },
      { time: 'Mediodía', text: 'Pastéis de nata en Pastéis de Belém, a un paso del monasterio.' },
      { time: 'Tarde', text: 'Paseo por la orilla: Monumento a los Descubrimientos y Torre de Belém.', placeId: 'torre-belem' },
      { time: 'Tarde', text: 'De vuelta, parada en LX Factory para tiendas y un café.', placeId: 'lx-factory' },
      { time: 'Noche', text: 'Cena en el Chiado y ambiente en el Bairro Alto.', placeId: 'bairro-alto' },
    ],
  },
  {
    day: 3,
    title: 'Escapada a Sintra',
    summary: 'Palacios entre bosques, a 40 minutos en tren desde Rossio.',
    stops: [
      { time: 'Mañana', text: 'Tren temprano desde Rossio y autobús 434 hasta el Palacio da Pena.', placeId: 'pena' },
      { time: 'Mediodía', text: 'Bajad al centro de Sintra y probad las «travesseiras», el dulce local.' },
      { time: 'Tarde', text: 'Vuelta a Lisboa y atardecer en el mirador de la Senhora do Monte.', placeId: 'senhora-monte' },
      { time: 'Noche', text: 'Cena de despedida en el Time Out Market o marisco en Cervejaria Ramiro.' },
    ],
  },
]
