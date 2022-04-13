import { useRef } from 'react'

// https://mailtrap.io/blog/react-send-email/
// https://dashboard.emailjs.com/
import { send } from '@emailjs/browser'
import emailService from '../emailjsconfig'

export const ContactForm = () => {
  const nombreRef = useRef(null)
  const mensajeRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!mensajeRef.current?.value.trim()) return

    const params = {
      from_name: nombreRef.current?.value,
      message: mensajeRef.current?.value,
    }
    send(
      emailService.SERVICE_ID,
      emailService.TEMPLATE_ID,
      params,
      emailService.PUBLIC_KEY,
    ).then(
      (result) => {
        alert('Message Sent, We will get back to you shortly', result.text)
      },
      (error) => {
        alert('An error occurred, Please try again', error.text)
      },
    )
  }

  return (
    <div className="block-contactform">
      <p>¿Te interesa?</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" ref={nombreRef} />
        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" rows={5} ref={mensajeRef} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
