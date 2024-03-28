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
    RKCode: '9861',
    title: 'Ravena',
    region: 'Ingleses',
    description:
      'IMÓVEL COM MATRÍCULA! Ótima oportunidade de investimento! Apartamento de 2 dorm, sendo a 1 suíte, 80m e vaga de garagem, além de ser mobiliado, a 300m do Mar, condomínio muito lindo, completo com piscina, quadra poliesportiva, quadra de tênis, academia, bicicletário, salão de festas. Possibilidade de financiamento. Venha conhecer esse excelente imóvel e se permitir o melhor que a vida oferece. Aceita financiamento bancário. Quer saber mais detalhes sobre este imóvel? Fale com a gente, estamos sempre conectados pelo celular, whats, e-mail, ou se preferir venha tomar um café!',
    price: 'R$ 620.000,00',
    details: {
      square: '82 m²',
      rooms: '2',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      './properties/ravena-f01.jpg',
      './properties/ravena-f02.jpg',
      './properties/ravena-f03.jpg',
      './properties/ravena-f04.jpg',
      './properties/ravena-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9855',
    title: 'Vila dos Açores',
    region: 'Ingleses',
    description:
      'IMÓVEL COM MATRÍCULA. Amplo apartamento 3 dormitórios, próximo ao mar, cozinha com móveis planejados, armário nos dormitórios, sacada com churrasqueira a carvão, garagem e hobby box. Condomínio com piscina, elevador, salão de festas e jardim. Fale com um de nossos corretores e visite este imóvel. Estamos sempre conectados pelo celular, whats e e-mail. Se preferir, venha tomar um café. Estamos localizados próximo à praia, na região das gaivotas, nos Ingleses - Florianópolis/SC',
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
      'PROJETO MODERNO Sobrado geminado alto padrão construtivo e fino acabamento. Em ótima localização na Praia dos Ingleses - Florianópolis, SC. Imóvel com 3 dormitórios, sendo 1 suíte master com closet, são 144m2 de área construída em rua com excelente estrutura, próximo a praça e a Igreja Santa Catarina de Alexandria, junto à rua Dário Manoel Cardoso. Fale com um de nossos corretores e visite este imóvel. Estamos sempre conectados pelo celular, whats e e-mail. Se preferir, venha tomar um café. Estamos localizados próximo à praia, na região das Gaivotas, nos Ingleses - Florianópolis/SC.',
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
