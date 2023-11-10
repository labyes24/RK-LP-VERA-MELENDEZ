# Componente PropertyCard

O componente `PropertyCard` é um cartão estilizado projetado para exibir informações sobre uma propriedade. Ele fornece uma representação visualmente atraente de detalhes importantes, imagens e um botão para expressar interesse.

## Uso

```jsx
import { PropertyCard } from 'caminho-para-sua-pasta-de-componentes';

// Exemplo de uso:
const propertyInfo = {
  // ... objeto de informações da propriedade
};

// Renderize o PropertyCard com propertyInfo
<PropertyCard propertyInfo={propertyInfo} />;



## Componentes Utilizados

- **Container:** Contêiner estilizado para todo o PropertyCard.
- **ImageSection:** Seção para exibir imagens da propriedade usando um componente Carousel.
- **DescriptionSection:** Seção para detalhes da propriedade, incluindo cabeçalho, tags, descrição, preço e um botão.
- **Header:** Contém o título e a região da propriedade.
- **Tags:** Exibe detalhes da propriedade usando componentes Tag.
- **Description:** Exibe a descrição da propriedade.
- **Price:** Exibe o preço da propriedade.
- **Button:** Um botão personalizável para expressar interesse.

## Dependências

- **Button:** Importado de `../../../../components/Button`.
- **Tag:** Importado de `../../../../components/Tag`.
- **Carousel:** Importado de `../../../../components/Carousel`.
- **SplideSlide:** Importado de `@splidejs/react-splide`.

## Estilo

Os estilos para os componentes são importados do módulo `./styles`.
