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
        alert('Mensaje mandado', result.text)
      },
      (error) => {
        alert('Ha habido un error y el mensaje no se ha enviado', error.text)
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
