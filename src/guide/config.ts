import type { GuideConfig } from '../types'

export const guide: GuideConfig = {
  brand: 'Viajes J.R. Collini',
  city: 'Lisboa',
  country: 'Portugal',
  days: 3,
  repo: 'lisboa-guide',
  tagline: 'Colinas, tranvías y pastéis de nata. Vuestra guía a mano.',
  heroImage:
    'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Lisbon_%2836831596786%29_%28cropped%29.jpg/1280px-Lisbon_%2836831596786%29_%28cropped%29.jpg',
  coords: { lat: 38.7223, lng: -9.1393 },
  timezone: 'Europe/Lisbon',
  mapZoom: 13,
  language: 'portugués',
  intro: {
    itinerary:
      'Tres días agrupados por zonas para no ir y venir: el centro histórico, Belém y una escapada a Sintra. Si llueve, cambiad el orden.',
    places:
      'Lo imprescindible de Lisboa y alrededores. Toca «Cómo llegar» para abrir la ruta en el mapa.',
    restaurants:
      'Clásicos de la ciudad: marisco, bifanas, pastéis de nata y algún local con fado. En los más famosos hay cola: id pronto o reservad.',
    transport:
      'Lisboa tiene muchas cuestas. Combinad paseos con metro, tranvía y los elevadores para no agotaros.',
    phrases:
      'Frases básicas en portugués con una pronunciación aproximada (leedla como si fuera español). Casi todo el mundo entiende el español si habláis despacio.',
    emergency: 'Teléfonos importantes. Toca «Llamar» para marcar directamente.',
  },
}
