/**
 * The Address info
 * @typedef {Object} Address
 * @property {string} street - The street.
 * @property {string} district - The district.
 * @property {string} number - The number.
 * @property {string} city - The city.
 * @property {string} state - The state.
 */

/**
 * The Broker Description info
 *  @typedef {Object} BrokerDescription
 *  @property {string} title - The title.
 *  @property {Array<string>} paragraph - The paragraph.
 */

/**
 * The Broker comments info
 * @typedef {Object} BrokerComments
 * @property {string} id - The id.
 * @property {string} author - The author.
 * @property {string} text - The text.
 */

/**
 * The broker profile.
 * @typedef {Object} BrokerProfile
 * @property {string} id - indicates the unique identifier of the broker.
 * @property {string} name - indicates the name of the broker.
 * @property {string} CRECI - indicates the CRECI of the broker.
 * @property {string} profileImage - indicates the profile image of the broker.
 * @property {BrokerDescription} description - indicates the description of the broker.
 * @property {Address} address - indicates the address of the broker.
 * @property {string} phone - indicates the phone number of the broker.
 * @property {string} email - indicates the email of the broker.
 * @property {Array<BrokerComments>} comments - indicates the comments or tips of the broker.
 *
 */
const brokerProfile = {
  id: crypto.randomUUID(),
  name: 'Winnetou Soares Martins',
  CRECI: '15089',
  profileImage: 'https://i.ibb.co/VjzQ4W9/Corretor-Img.png',
  description: {
    title:
      'Investir em imóveis é investir em conhecimento, no seu tempo e na sua família. ',
    paragraph: [
      'Apresento-me como seu corretor de imóveis, especializado em oferecer mais do que propriedades, vendo informações estratégicas e oportunidades de investimento sólido no dinâmico mercado imobiliário.',
      'Estou aqui para ser seu guia confiável nessa jornada, proporcionando acesso aos insights valiosos sobre tendências do mercado, recomendações personalizadas para investimentos sólidos e orientação em cada etapa, desde pesquisa até a negociação de sucesso para as partes envolvidas.',
    ],
  },
  address: {
    street: 'Rua das Gaivotas',
    number: '1709',
    district: 'Ingleses',
    city: 'Florianópolis',
    state: 'SC',
  },
  phone: '(48) 98826-2951 ',
  email: 'winnetou@rkimoveis.com.br',
  comments: [
    {
      id: crypto.randomUUID(),
      author: 'Paola Oliveira,  Atriz',
      text: 'Winnetou apresentou-se bastante solícito e acolhedor. Acompanhou cada etapa do processo com bastante cuidado. Profissional excelente, capacitado e atencioso com cada detalhe.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Paola Oliveira,  Atriz',
      text: 'Winnetou apresentou-se bastante solícito e acolhedor. Acompanhou cada etapa do processo com bastante cuidado. Profissional excelente, capacitado e atencioso com cada detalhe.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Manoel de Barros, Poeta',
      text: 'Fazer negócios com a RK Imóveis é garantia de sucesso. Eu já comprei, vendi, fui locador e locatário de imóveis, e em todas as negociações fui bem atendido.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Manoel',
      text: 'Excelente atendimento, quando anunciei meu imóvel, foram muito atenciosos, e venderam ele muito rápido. Empresa séria e transparente. Recomendo!',
    },
  ],
}

/**
 * Retrieves the broker profile.
 * @return {BrokerProfile} returns the broker profile info.
 */
export function getBrokerProfile() {
  return brokerProfile
}
