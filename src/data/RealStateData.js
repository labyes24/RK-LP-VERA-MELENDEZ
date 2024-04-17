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
    RKCode: '9855',
    title: 'Vila dos Açores',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n Amplo apartamento 3 dormitórios, próximo ao mar, cozinha com móveis planejados, armário nos dormitórios, sacada com churrasqueira a carvão, garagem e hobby box. Condomínio com piscina, elevador, salão de festas e jardim.',
    price: 'R$ 850.000,00',
    details: {
      square: '96,32 m²',
      rooms: '3',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      './properties/açores-f01.jpg',
      './properties/açores-f02.jpg',
      './properties/açores-f03.jpg',
      './properties/açores-f04.jpg',
      './properties/açores-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9142',
    title: 'Jardim dos Cedros',
    region: 'Ingleses',
    description:
      '**PROJETO MODERNO**\n\n Sobrado geminado alto padrão construtivo e fino acabamento. Em ótima localização na Praia dos Ingleses - Florianópolis, SC.\n\n Imóvel com 3 dormitórios, sendo 1 suíte master com closet, são 144m2 de área construída em rua com excelente estrutura, próximo a praça e a Igreja Santa Catarina de Alexandria, junto à rua Dário Manoel Cardoso.',
    price: 'R$ 949.000,00',
    details: {
      square: '144 m²',
      rooms: '3',
      bathrooms: '2',
      garage: '2',
    },
    pictures: [
      './properties/cedros-f01.jpg',
      './properties/cedros-f02.jpg',
      './properties/cedros-f03.jpg',
      './properties/cedros-f04.jpg',
      './properties/cedros-f05.jpg',
    ],
  },
]

/**
 * Retrieves the properties info.
 * @return {Array<Property>} returns an array of properties info.
 */
export function useProperties() {
  return properties
}
