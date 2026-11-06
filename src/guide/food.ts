import type { Dish } from '../types'

// Typical food first; a spot is only named when a long-standing place is
// famous for that dish. Photos from Wikimedia Commons.
export const dishes: Dish[] = [
  {
    id: 'pastel-nata',
    name: 'Pastel de nata',
    nameEs: 'Pastelito de crema',
    kind: 'Dulce',
    description:
      'El dulce de Lisboa: hojaldre crujiente relleno de crema de huevo, con la superficie tostada. Mejor recién hecho y aún templado.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Pastel_de_nata_%2818616473070%29.jpg/960px-Pastel_de_nata_%2818616473070%29.jpg',
    tip: 'Se espolvorea con canela y azúcar glas al gusto. Lo encontraréis en cualquier pastelería, pero el original de Belém es otra cosa.',
    spot: { name: 'Pastéis de Belém', area: 'Belém, junto a los Jerónimos', lat: 38.6975, lng: -9.2032 },
  },
  {
    id: 'bacalhau-bras',
    name: 'Bacalhau à Brás',
    nameEs: 'Bacalao dorado',
    kind: 'Plato',
    description:
      'Bacalao desmigado con patatas paja, cebolla y huevo, terminado con aceitunas negras y perejil. Es el plato de bacalao más popular de Lisboa, ciudad donde nació.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Bacalhau_a_Bras.jpg/960px-Bacalhau_a_Bras.jpg',
    tip: 'Dicen que hay una receta de bacalao para cada día del año: si os gusta, probad también el «bacalhau com natas».',
  },
  {
    id: 'sardinhas',
    name: 'Sardinhas assadas',
    nameEs: 'Sardinas asadas',
    kind: 'Plato',
    description:
      'Sardinas a la brasa, con sal gorda, servidas sobre una rebanada de pan, con pimientos asados y patatas cocidas.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Grilled_Sardines_5.50%E2%82%AC_Marisqueira_O_Varino_Nazar%C3%A9_%283785526688%29.jpg/960px-Grilled_Sardines_5.50%E2%82%AC_Marisqueira_O_Varino_Nazar%C3%A9_%283785526688%29.jpg',
    tip: 'Su temporada es el verano. En junio, por las fiestas de San Antonio, Alfama huele a sardina asada en cada esquina.',
  },
  {
    id: 'amejoas',
    name: 'Amêijoas à Bulhão Pato',
    nameEs: 'Almejas con ajo y cilantro',
    kind: 'Plato',
    description:
      'Almejas abiertas al momento con aceite, mucho ajo, cilantro y limón. Imprescindible mojar pan en la salsa.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Am%C3%AAijoas_%C3%A0_Bulh%C3%A3o_Pato.jpg/960px-Am%C3%AAijoas_%C3%A0_Bulh%C3%A3o_Pato.jpg',
    tip: 'En las marisquerías se pide por peso o por ración y se comparte, con una cerveza bien fría.',
    spot: { name: 'Cervejaria Ramiro', area: 'Intendente', lat: 38.7208, lng: -9.1357 },
  },
  {
    id: 'polvo',
    name: 'Polvo à lagareiro',
    nameEs: 'Pulpo asado con aceite',
    kind: 'Plato',
    description:
      'Pulpo cocido y después asado, bañado en aceite de oliva con ajo, acompañado de patatas pequeñas asadas con piel («a murro»).',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Polvo_%C3%A0_Lagareiro.jpg/960px-Polvo_%C3%A0_Lagareiro.jpg',
    tip: 'Para los que prefieren algo distinto al bacalao: es tierno y muy sabroso, y está en la carta de casi todas las casas tradicionales.',
  },
  {
    id: 'caldo-verde',
    name: 'Caldo verde',
    nameEs: 'Sopa de col',
    kind: 'Plato',
    description:
      'Sopa de patata con tiras muy finas de col y una rodaja de chorizo. Sencilla, reconfortante y muy portuguesa.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Caldo_verde_-_Jul_2008.jpg/960px-Caldo_verde_-_Jul_2008.jpg',
    tip: 'Buen primer plato ligero, o para entrar en calor en un día fresco.',
  },
  {
    id: 'bifana',
    name: 'Bifana',
    nameEs: 'Bocadillo de cerdo adobado',
    kind: 'Para picar',
    description:
      'Filetes finos de cerdo cocinados en una salsa de ajo, vino y pimentón, dentro de un panecillo. La comida rápida de toda la vida.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Bifana_on_a_plate.jpg/960px-Bifana_on_a_plate.jpg',
    tip: 'Se toma de pie en la barra, con mostaza y una cerveza o un café. Ideal para una comida rápida entre visitas.',
  },
  {
    id: 'travesseiro',
    name: 'Travesseiro de Sintra',
    nameEs: 'Almohadita de hojaldre',
    kind: 'Dulce',
    description:
      'Hojaldre alargado relleno de crema de almendra y huevo, espolvoreado con azúcar. El dulce típico de Sintra.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Piriquita_%2814401986732%29.jpg',
    tip: 'Perfecto para la escapada a Sintra: probadlo junto a las «queijadas», el otro dulce del pueblo.',
    spot: { name: 'Piriquita', area: 'Centro histórico de Sintra', lat: 38.7978, lng: -9.3893 },
  },
  {
    id: 'ginjinha',
    name: 'Ginjinha',
    nameEs: 'Licor de guindas',
    kind: 'Bebida',
    description:
      'Licor dulce de guindas que se toma en un vasito, con o sin la fruta dentro. Una tradición muy lisboeta.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Ginjinha_store.jpg/960px-Ginjinha_store.jpg',
    tip: 'Pedidla «com elas» (con guindas) o «sem elas» (sin ellas). Se toma de un trago, de pie en la calle.',
    spot: { name: 'A Ginjinha', area: 'Largo de São Domingos, Rossio', lat: 38.714, lng: -9.138 },
  },
  {
    id: 'bica',
    name: 'Bica',
    nameEs: 'Café solo',
    kind: 'Bebida',
    description:
      'El café solo corto que se toma en Lisboa a cualquier hora, en la barra y en un momento.',
    tip: 'Si lo queréis con leche, pedid un «galão» (en vaso, como un café con leche suave) o un «garoto» (cortado).',
    spot: { name: 'Café A Brasileira', area: 'Chiado', lat: 38.7107, lng: -9.1424 },
  },
]
