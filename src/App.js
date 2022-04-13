import React from 'react'
import { Gallery } from './components/Gallery'
import { Equipamiento } from './components/Equipamiento'
import { Header } from './components/Header'
import { getData } from './pages/api'
import { Precio } from './components/Precio'
import { Anuncio } from './components/Anuncio'
import { ContactForm } from './components/ContactForm'

const App = (props) => {
  const data = getData();
  return (
    <div>
      <Header title={props.title} subtitle={props.subtitle}/>
      <div className='content-wrapper'>
        <div className="content">
          <Anuncio />
          <Equipamiento />
          <Precio />
          <ContactForm />
        </div>
        <Gallery pictures={data} />
      </div>
    </div>
  )
}

export default App
