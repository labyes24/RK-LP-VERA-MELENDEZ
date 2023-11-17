/**
 * Sends an email using the EmailJS API.
 * @param {string} mailSenderName - The name of the sender.
 * @param {string} messageText - The content of the email message.
 * @param {string} mailTo - The email address to send the email to (optional if provided on template).
 * @return {Promise<Response>} A promise that resolves with the response from the API.
 */
export async function sendMail(mailSenderName, messageText, mailTo = '') {
  const EMAILJS_SEND_API = 'https://api.emailjs.com/api/v1.0/email/send'

  if (mailTo !== '') {
    const validEmailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    const isEmailValid = validEmailRegex.test(mailTo)

    if (!isEmailValid) {
      return Promise.reject(`sendMail error: invalid email ${mailTo}`)
    }
  }

  const response = await fetch(EMAILJS_SEND_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      user_id: import.meta.env.VITE_EMAILJS_USER_ID,
      template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      template_params: {
        senderName: mailSenderName,
        message: messageText,
        mailto: mailTo,
      },
    }),
  })

  return response
}
