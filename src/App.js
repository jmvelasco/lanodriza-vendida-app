import React from 'react'


import { Header } from './pages/header'
import { Equipamiento } from './pages/equipamiento'

import { Gallery } from './components/gallery'

const data = [
  {
    name: 'Homologación',
    picturePath: '/img/reforma.jpg',
    description: 'Descripción de la homologación realizada a Camper Van',
    display: 'flex',
  },
  {
    name: 'ITV',
    picturePath: '/img/itv_informe.jpg',
    description: 'Informe de la ITV',
    display: 'none',
  },
  {
    name: 'ITV',
    picturePath: '/img/itv_validez.jpg',
    description: 'Fecha validez de la ITV',
    display: 'none',
  },
  {
    name: 'ITV',
    picturePath: '/img/itv_pegatina.jpg',
    description: 'Pegatina de la ITV',
    display: 'none',
  },
  {
    name: 'Kilométros',
    picturePath: '/img/kilometros.jpg',
    description: 'Kilometros realizados',
    display: 'none',
  },
  {
    name: 'Vista Frontal',
    picturePath: '/img/frontal.jpg',
    description: 'Vista frontal',
    display: 'none',
  },
  {
    name: 'Vista Lateral',
    picturePath: '/img/lateral.jpg',
    description: 'Vista Lateral',
    display: 'none',
  },
  {
    name: 'Vista Lateral',
    picturePath: '/img/lateral_abierta.jpg',
    description: 'Vista Lateral con puerta abierta',
    display: 'none',
  },
  {
    name: 'Vista Trasera',
    picturePath: '/img/trasera_abierta.jpg',
    description: 'Vista desde atrás con puerta abierta',
    display: 'none',
  },
  {
    name: 'Despensa',
    picturePath: '/img/despensa_cerrada.jpg',
    description:
      'Vista de la despensa y depósito de agua donde poder guardar víveres',
    display: 'none',
  },
  {
    name: 'Despensa',
    picturePath: '/img/despensa_abierta.jpg',
    description:
      'Vista de la despensa abierta y depósito de agua donde poder guardar víveres',
    display: 'none',
  },
  {
    name: 'Depósito de Agua',
    picturePath: '/img/deposito_agua.jpg',
    description: 'Depósito de Agua',
    display: 'none',
  },
]

const App = (props) => {

  return (
    <div>
      
      <Header title={props.title} subtitle={props.subtitle}/>
      <Equipamiento />

      <Gallery pictures={data} />

    </div>
  )
}

export default App
