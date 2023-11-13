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
 * @property {string} quote - The text quote.
 */

/**
 * The Broker tips
 * @typedef {Object} BrokerTips
 * @property {string} id - The id.
 * @property {string} quote - The tip text.
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
 * @property {Array<BrokerComments>} comments - indicates the comments to the broker.
 * @property {Array<BrokerTips>} tips - indicates the tips of the broker.
 *
 */
const brokerProfile = {
  id: crypto.randomUUID(),
  name: 'Winnetou Soares Martins',
  CRECI: '64.763-F',
  profileImage: 'https://i.ibb.co/VjzQ4W9/Corretor-Img.png',
  description: {
    title:
      'Pai do Bento e marido da Luciana, praticante de artes marciais e nas horas vagas se arrisca a cantar, tocando violão',
    paragraph: [
      'Apresento-me como seu corretor de imóveis, especializado em oferecer mais do que propriedades, vendo informações estratégicas e oportunidades de investimento sólido no dinâmico mercado imobiliário.',
      'Estou aqui para ser seu guia confiável nessa jornada, proporcionando acesso aos insights valiosos sobre tendências do mercado, recomendações personalizadas para investimentos sólidos e orientação em cada etapa, desde pesquisa até a negociação de sucesso para as partes envolvidas.',
      'Super-dica: na hora de negociar, solicite as certidões negativas necessárias para a realização da escritura.',
      'Confira mais dicas valiosas abaixo!',
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
      quote:
        'Winnetou apresentou-se bastante solícito e acolhedor. Acompanhou cada etapa do processo com bastante cuidado. Profissional excelente, capacitado e atencioso com cada detalhe.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Paola Oliveira,  Atriz',
      quote:
        'Winnetou apresentou-se bastante solícito e acolhedor. Acompanhou cada etapa do processo com bastante cuidado. Profissional excelente, capacitado e atencioso com cada detalhe.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Manoel de Barros, Poeta',
      quote:
        'Fazer negócios com a RK Imóveis é garantia de sucesso. Eu já comprei, vendi, fui locador e locatário de imóveis, e em todas as negociações fui bem atendido.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Manoel',
      quote:
        'Excelente atendimento, quando anunciei meu imóvel, foram muito atenciosos, e venderam ele muito rápido. Empresa séria e transparente. Recomendo!',
    },
  ],
  tips: [
    {
      id: crypto.randomUUID(),
      quote:
        'Defina seu objetivo: ao comprar um imóvel é fundamental entender a finalidade, pois influenciará nas suas escolhas.',
    },
    {
      id: crypto.randomUUID(),
      quote:
        'Você pode ter diferentes objetivos como investimento em Revenda: Pesquise a valorização da propriedade a longo prazo, se for imóvel usado ou em construção.',
    },
    {
      id: crypto.randomUUID(),
      quote:
        'Se é para locação: Considere a demanda por aluguéis na área e o retorno sobre o investimento, seja rentabilidade anual ou sazonal.',
    },
    {
      id: crypto.randomUUID(),
      quote:
        'Se for para moradia: Priorize suas necessidades pessoais, como proximidade do trabalho e qualidade de vida na região.',
    },
  ],
}

/**
 * Retrieves the broker profile.
 * @return {BrokerProfile} returns the broker profile info.
 */
export function useBrokerProfile() {
  return brokerProfile
}
