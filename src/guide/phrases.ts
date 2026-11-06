import type { PhraseGroup } from '../types'

// "pron" is an approximate pronunciation for Spanish readers, not IPA.
export const phraseGroups: PhraseGroup[] = [
  {
    group: 'Saludos y cortesía',
    items: [
      { es: 'Hola', local: 'Olá', pron: 'o-lá' },
      { es: 'Buenos días', local: 'Bom dia', pron: 'bon día' },
      { es: 'Buenas tardes', local: 'Boa tarde', pron: 'bóa tard' },
      { es: 'Buenas noches', local: 'Boa noite', pron: 'bóa nóit' },
      { es: 'Por favor', local: 'Por favor', pron: 'pur fa-vór' },
      { es: 'Gracias (lo dice un hombre)', local: 'Obrigado', pron: 'o-bri-gá-du' },
      { es: 'Gracias (lo dice una mujer)', local: 'Obrigada', pron: 'o-bri-gá-da' },
      { es: 'Perdón / disculpe', local: 'Desculpe', pron: 'dex-kúlp' },
      { es: 'Sí / No', local: 'Sim / Não', pron: 'sin / náun' },
    ],
  },
  {
    group: 'Preguntas útiles',
    items: [
      { es: '¿Habla español?', local: 'Fala espanhol?', pron: 'fála ex-pa-ñól' },
      { es: '¿Cuánto cuesta?', local: 'Quanto custa?', pron: 'kuán-tu kúx-ta' },
      { es: '¿Dónde está…?', local: 'Onde fica…?', pron: 'ón-de fí-ka' },
      { es: '¿Dónde está el baño?', local: 'Onde é a casa de banho?', pron: 'ón-de é a ká-sa de bá-ñu' },
      { es: 'No entiendo', local: 'Não percebo', pron: 'náun per-sé-bu' },
    ],
  },
  {
    group: 'En el restaurante',
    items: [
      { es: 'Una mesa para dos', local: 'Uma mesa para dois', pron: 'úma mé-sa pra dóix' },
      { es: 'La carta, por favor', local: 'A ementa, por favor', pron: 'a i-mén-ta pur fa-vór' },
      { es: 'Un café solo', local: 'Uma bica', pron: 'úma bí-ka' },
      { es: 'Agua sin gas', local: 'Água sem gás', pron: 'á-gua sen gax' },
      { es: 'La cuenta, por favor', local: 'A conta, por favor', pron: 'a cón-ta pur fa-vór' },
      { es: 'Está muy rico', local: 'Está muito bom', pron: 'ex-tá múin-tu bon' },
    ],
  },
  {
    group: 'Emergencias',
    items: [
      { es: '¡Ayuda!', local: 'Socorro!', pron: 'su-kó-rru' },
      { es: 'Necesito un médico', local: 'Preciso de um médico', pron: 'pre-sí-su dun mé-di-ku' },
      { es: 'Llame a una ambulancia', local: 'Chame uma ambulância', pron: 'shá-me úma an-bu-lán-sia' },
      { es: '¿Dónde hay una farmacia?', local: 'Onde há uma farmácia?', pron: 'ón-de a úma far-má-sia' },
    ],
  },
]
