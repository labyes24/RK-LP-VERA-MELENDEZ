# ContactForm

O componente `ContactForm` renderiza um formulário de contato com o corretor. O formulário captura as informações de contato do cliente e também informações sobre o tipo de imóvel e sua aplicação e as envia para o corretor no email informado.

> ⚠️ **Atenção**: informar as credenciais do `emailjs` e o email para teste conforme [configuração](#🔧-configuração) descrita abaixo.

## 💪 Funcionalidades

- Captar as informações de contato e interesses do cliente e enviar para o corretor.

## 🖥️ Screenshots

<img src='https://i.ibb.co/nCm7XP2/contact-Form.png' width='65%' />

## 🔧 Configuração

Criar um arquivo com o nome `.env.local` na pasta raiz do projeto e adicionar os valores das credenciais do `emailjs` seguindo o exemplo abaixo:

```bash
# emailjs credentials
VITE_EMAILJS_USER_ID: "DddDddDddDddDddDd"
VITE_EMAILJS_SERVICE_ID: "service_nnnnnnn"
VITE_EMAILJS_TEMPLATE_ID: "template_nnnnnnn"

# development emailjs test
VITE_EMAILJS_MAIL_TEST: "seu.email@gmail.com"
```

> 🔑 Os valores de ***user_id***, ***service_id*** e ***template_id*** devem ser obtidos da conta do `emailjs`.

> 🧪 O valor de ***mail_test*** deve ser o email que receberá as mensagens do formulário durante o **desenvolvimento** e **testes**.

Na conta [**emailJs**](https://dashboard.emailjs.com/) é necessário um template com a estrutura apresentada abaixo para envio do e-mail.

<img src='https://i.ibb.co/hDHCbB8/emailjs-template.png' width='85%' />

> Os valores marcados em vermelho são variáveis que precisam estar presentes no template para o funcionamento do envio.

Exemplo de email enviado:

<img src='https://i.ibb.co/f8dXZP2/email-example.png' width='55%' />

## 🛠️ Stack utilizada

**Front-end:**

- JavaScript
- React
- Styled-Components

## 🟩 Cores

| Tipo                  | Hexadecimal                                                      |
| --------------------- | ---------------------------------------------------------------- |
| form/background        | ![#FDFDFD](https://via.placeholder.com/10/FDFDFD?text=+) #FDFDFD |
| form/label        | ![#091030](https://via.placeholder.com/10/091030?text=+) #091030 |
| form/label/span        | ![#888ca6](https://via.placeholder.com/10/888ca6?text=+) #888ca6 |
| form/footer/background        | ![#cecfd6](https://via.placeholder.com/10/cecfd6?text=+) #cecfd6 |
| form/footer/paragraph        | ![#091030](https://via.placeholder.com/10/091030?text=+) #091030 |


## 📃 Tipografia

| Tipo            | Especificações  |
| --------------- | --------------- |
| Títulos | `24px` `Roboto` |
| Labels | `18px` `Roboto` |
| Footer | `10px` `Nunito` |

## 🗣️ Suporte

Para obter ajuda ou mandar um feedback para nossa equipe, envie um email para labyes23@gmail.com.

## 👥 Autores

- [Caio Balduino](https://github.com/Caiobaldur) - Design e padronização do layout.
- [Cristian Sbardelotto](https://github.com/cristian-sbardelotto) - Desenvolvedor Frontend.
- [Evandro Damaso](https://github.com/dam450) - Design e padronização do layout.
- [Francisco Ylderlan](https://github.com/FranciscoYlderlan) - Design e padronização do layout.
- [Grace Kelly](https://github.com/gksouza) - Q.A.
- [Henrico Angolera](https://github.com/HenricoAngolera) - Q.A.
- [Thalyta Rangel](https://github.com/ThalytaRangel) - Design e padronização do layout.
