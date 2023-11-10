# Componente Carousel

O componente `Carousel` é um carrossel estilizado que renderiza filhos em tags `SplideSlide`. Ele oferece flexibilidade para diferentes tipos de carrosséis com base na opção especificada.

## Uso

```jsx
import { Carousel } from 'caminho-para-sua-pasta-de-componentes';

// Exemplo de uso:
const itensDoCarrossel = [
  // ... array de itens do carrossel
];

// Renderize o Carousel com itensDoCarrossel
<Carousel option="card" length={itensDoCarrossel.length}>
  {itensDoCarrossel.map((item, index) => (
    <SplideSlide key={index}>
      {/* Renderize seu conteúdo aqui */}
    </SplideSlide>
  ))}
</Carousel>
```

## Props

- **children:** O conteúdo a ser renderizado dentro do carrossel.
- **option (padrão: 'default'):** Tipo de carrossel. Os valores possíveis são 'default', 'card', 'cardProperty', 'picture'.
- **length (padrão: 0):** Comprimento do array usado para determinar o comportamento do carrossel.

## Opções

O carrossel suporta diferentes opções com base na opção especificada. Abaixo estão algumas opções predefinidas:

- **'card':** Carrossel para cartões com navegação e configurações responsivas.
- **'cardProperty':** Carrossel para cartões de propriedades com configurações específicas para exibição de propriedades.
- **'picture':** Carrossel para exibição de imagens com navegação.

## Estilo

O carrossel é estilizado usando o componente `ContainerSplide` do módulo `./styles`.
