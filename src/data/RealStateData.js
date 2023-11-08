/**
 * The property info
 * @typedef {Object} Property
 * @property {string} id - indicates the unique identifier of the property.
 * @property {string} brokerId - indicates the broker identifier of the property.
 * @property {string} RKCode - indicates the property code on RK Imóveis website.
 * @property {string} title - indicates the title of the property.
 * @property {string} region - indicates the region of the property.
 * @property {string} description - indicates the description of the property.
 * @property {string} price - indicates the price of the property.
 * @property {Object} details - indicates the details of the property.
 * @property {string} details.square - The square meters of the property.
 * @property {string} details.rooms - The rooms of the property.
 * @property {string} details.bathrooms - The bathrooms of the property.
 * @property {string} details.garage - The garage of the property.
 * @property {Array<string>} pictures - indicates the URL of the pictures of the property.
 */

const BROKER_ID = crypto.randomUUID()

const properties = [
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '8780',
    title: 'Apartamento à venda',
    region: 'Cachoeira do Bom Jesus, Florianópolis',
    description:
      'Belíssimo apartamento mobiliado com 2 dormitórios sendo um suíte, sala para 2 ambientes, ampla sacada com churrasqueira e vista panorâmica, cozinha com armários e bancada americana, área de serviço com balcão, vaga de garagem. Condomínio com a maior piscina privada da América Latina, com fitness center, espaço gourmet, 4 salões de festas, salão de festas infantil, salão de jogos, playground, SPA , sauna seca e úmida, piscina aquecida com raia, quadra de esportes e tênis, home office, home cinema, lounge, bar de piscina, portaria 24h e com deck de acesso a praia.',
    price: 'R$ 1.171.000,00',
    details: {
      square: '80,52m²',
      rooms: '2',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      'https://i.ibb.co/hXFdzSq/imagens-173453.jpg',
      'https://i.ibb.co/SmmxBFq/imagens-68249.jpg',
      'https://i.ibb.co/LgP4LRY/imagens-742811.jpg',
      'https://i.ibb.co/WpNX0rS/imagens-836752.jpg',
      'https://i.ibb.co/6P2RtxV/imagens-992826.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9566',
    title: 'Excelente Casa Alto Padrão à venda',
    region: 'Jurerê, Florianópolis',
    description:
      'Maravilhosa Casa Alto Padrão com 6 Suítes, sedo uma Suíte Master em Jurerê!! Se você busca o auge do conforto e luxo, esta é a casa dos seus sonhos! Localizada em Jurerê, esta propriedade impressionante oferece uma combinação perfeita de elegância, entretenimento e lazer.',
    price: 'R$ 8.500.000,00',
    details: {
      square: '600m²',
      rooms: '6',
      bathrooms: '6',
      garage: '4',
    },
    pictures: [
      'https://i.ibb.co/86d5qpt/4gmcv-imagem-do-whatsapp-de-2023-10-17-as-085503-93de50e6-1697575481.jpg',
      'https://i.ibb.co/SrfcVQG/hzcah-imagem-do-whatsapp-de-2023-10-17-as-085506-aad9dfc6-1697575481.jpg',
      'https://i.ibb.co/CM97mX5/lu3x1-imagem-do-whatsapp-de-2023-10-17-as-085507-03cf43ae-1697575481.jpg',
      'https://i.ibb.co/Tbfy7qj/oq6x4-imagem-do-whatsapp-de-2023-10-17-as-085502-1715d6a2-1697575481.jpg',
      'https://i.ibb.co/ZWcgVBm/zndfw-imagem-do-whatsapp-de-2023-10-17-as-085505-1bc53a96-1697575481.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '6714',
    title: 'Linda cobertura com excelente localização e próxima do Mar',
    region: 'Ingleses, Florianópolis',
    description:
      'Ótima opção de investimento ou moradia no Norte dos Ingleses. Região cercada por morros e próximo do mar, com excelente estrutura. Região de alta rentabilidade para quem busca investir, e tranquilidade para quem busca morar.',
    price: 'R$ 900.000,00',
    details: {
      square: '198,48 m²',
      rooms: '3',
      bathrooms: '3',
      garage: '2',
    },
    pictures: [
      'https://i.ibb.co/d67QN6g/imagens-807398.jpg',
      'https://i.ibb.co/SVknN10/imagens-471610.jpg',
      'https://i.ibb.co/1m2DvF9/imagens-224659.jpg',
      'https://i.ibb.co/945qNgT/imagens-518017.jpg',
      'https://i.ibb.co/XJCvTHQ/imagens-850807.jpg',
    ],
  },
]

/**
 * Retrieves the properties info.
 * @return {Array<Property>} returns an array of properties info.
 */
export function getProperties() {
  return properties
}
