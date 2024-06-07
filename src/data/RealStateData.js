import { useTranslation } from 'react-i18next'

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

/**  @type {Array<Property>} The Portuguese properties data */
const propertiesPT = [
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9987',
    title: 'Cruzeiro do Sul',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n APARTAMENTO SEMI MOBILIADO em condomínio na Rua das GAIVOTAS. Excelente OPORTUNIDADE de investimento para locação de temporada, locação anual!!!\n Condomínio frente mar, localizado na região nobre da praia dos Ingleses. Próximo de mercado, ponto de ônibus, restaurantes, sorveteria, pilates entre outros.\n Apartamento de 01 dormitório, sala, cozinha, sacada com churrasqueira. Não possui vaga de garagem.\n RESIDENCIAL CRUZEIRO DO SUL - Condomínio com elevador, portaria 24h e área de lazer completa.',
    price: 'R$ 480.000,00',
    details: {
      square: '42,33 m²',
      rooms: '1',
      bathrooms: '1',
      garage: '0',
    },
    pictures: [
      './properties/cruzeiro-sul-f01.jpg',
      './properties/cruzeiro-sul-f02.jpg',
      './properties/cruzeiro-sul-f03.jpg',
      './properties/cruzeiro-sul-f04.jpg',
      './properties/cruzeiro-sul-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '10060',
    title: 'Pajuçara',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n Apartamento lindamente decorado com 02 dormitórios, sendo 01 suíte, banheiro social mais lavabo, ampla sala com cozinha conjugado, área de serviço, sacada com churrasqueira e duas vaga de garagem.\n Posição solar NORTE.\n Condomínio PAJUÇARA localizado na área nobre, cerca de 300 metros do mar, possui área de lazer do terraço do residencial, com piscina, salão de festas e zeladoria, elevador, interfone e portão eletrônico.',
    price: 'R$ 750.000,00',
    details: {
      square: '83,29 m²',
      rooms: '2',
      bathrooms: '2',
      garage: '2',
    },
    pictures: [
      './properties/pajucara-f01.jpg',
      './properties/pajucara-f02.jpg',
      './properties/pajucara-f03.jpg',
      './properties/pajucara-f04.jpg',
      './properties/pajucara-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '10005',
    title: 'Mares do Sul',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n Sempre quis morar perto do MAR? Esta é a sua grande chance!\n Iluminação natural incrível, com direito a ver sol nascer na sacada e passar por ele até o final da tarde.\n Estrutura de segurança completa: porteiro com reconhecimento facial, circuito interno de câmeras de segurança e cerca elétrica.\n A localização não poderia ser melhor: o apartamento fica a 5 minutos do melhor lugar da praia dos Ingleses, 7 minutos do Centro do bairro. Você pode contar com dois pontos de ônibus o coletivo e o executivo, além de farmácia próxima e dois supermercados somente a 10 minutos.',
    price: 'R$ 1.250.000,00',
    details: {
      square: '108,95 m²',
      rooms: '3',
      bathrooms: '4',
      garage: '2',
    },
    pictures: [
      './properties/mares-sul-f01.jpg',
      './properties/mares-sul-f02.jpg',
      './properties/mares-sul-f03.jpg',
      './properties/mares-sul-f04.jpg',
      './properties/mares-sul-f05.jpg',
    ],
  },
]

/**  @type {Array<Property>} The Portuguese properties data */
const propertiesES = [
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9987',
    title: 'Cruzeiro do Sul',
    region: 'Ingleses',
    description:
      '**PROPIEDAD CON REGISTRO**\n\n APARTAMENTO SEMIAMUEBLADO en condominio en Rua das GAIVOTAS. Excelente OPORTUNIDAD de inversión para alquiler por temporada, alquiler anual!!!\n Condominio frente al mar, ubicado en la privilegiada región de Praia dos Ingleses. Cerca de mercado, parada de bus, restaurantes, heladería, pilates, entre otros.\n Departamento de 01 dormitorio, sala, comedor, cocina, balcón con asador. No hay plaza de aparcamiento.\n RESIDENCIAL CRUZEIRO DO SUL - Condominio con ascensor, conserjería 24 horas y completa zona de ocio.',
    price: 'R$ 480.000,00',
    details: {
      square: '42,33 m²',
      rooms: '1',
      bathrooms: '1',
      garage: '0',
    },
    pictures: [
      './properties/cruzeiro-sul-f01.jpg',
      './properties/cruzeiro-sul-f02.jpg',
      './properties/cruzeiro-sul-f03.jpg',
      './properties/cruzeiro-sul-f04.jpg',
      './properties/cruzeiro-sul-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '10060',
    title: 'Pajuçara',
    region: 'Ingleses',
    description:
      '**PROPIEDAD CON REGISTRO**\n\n Apartamento bellamente decorado con 02 dormitorios, 01 suite, baño de visitas más toilette, amplio salón con cocina, área de lavado, balcón con asador y dos estacionamientos.\n Posición solar NORTE.\ n Condominio PAJUÇARA ubicado en zona privilegiada, a unos 300 metros del mar, cuenta con área de ocio en la terraza residencial, con piscina, salón de fiestas y conserje, ascensor, intercomunicador y portón electrónico.',
    price: 'R$ 750.000,00',
    details: {
      square: '83,29 m²',
      rooms: '2',
      bathrooms: '2',
      garage: '2',
    },
    pictures: [
      './properties/pajucara-f01.jpg',
      './properties/pajucara-f02.jpg',
      './properties/pajucara-f03.jpg',
      './properties/pajucara-f04.jpg',
      './properties/pajucara-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '10005',
    title: 'Mares do Sul',
    region: 'Ingleses',
    description:
      '**PROPIEDAD CON REGISTRO**\n\n ¿Siempre has querido vivir cerca del MAR? ¡Esta es tu gran oportunidad!\n Increíble iluminación natural, con derecho a ver salir el sol desde el balcón y pasar hasta el final de la tarde.\n Estructura de seguridad completa: portero con reconocimiento facial, circuito interno de cámaras de seguridad y cerca eléctrica.\n La ubicación no podría ser mejor: el apartamento está a 5 minutos del mejor lugar de Praia dos Ingleses, a 7 minutos del centro del barrio. Podrás contar con dos paradas de autobús, el colectivo y el ejecutivo, además de una farmacia cercana y dos supermercados a tan sólo 10 minutos.',
    price: 'R$ 1.250.000,00',
    details: {
      square: '108,95 m²',
      rooms: '3',
      bathrooms: '4',
      garage: '2',
    },
    pictures: [
      './properties/mares-sul-f01.jpg',
      './properties/mares-sul-f02.jpg',
      './properties/mares-sul-f03.jpg',
      './properties/mares-sul-f04.jpg',
      './properties/mares-sul-f05.jpg',
    ],
  },
]

/**
 * The Properties data
 * @typedef {Object} PropertiesData
 * @property {Array<Property>} pt - The Portuguese property data.
 * @property {Array<Property>} es - The Spanish property data.
 */

/** @type {PropertiesData} The properties data */
const properties = {
  pt: propertiesPT,
  es: propertiesES,
}

/**
 * Retrieves the properties info.
 * @return {Array<Property>} returns an array of properties info.
 */
export function useProperties() {
  const {
    i18n: { language },
  } = useTranslation()

  if (properties[language]) {
    return properties[language]
  } else {
    return properties['pt']
  }
}
