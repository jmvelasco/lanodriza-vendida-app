import React, { useState } from 'react'
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

const CardList = (props) => {
  if ((props.displayIndex >= 0) && (props.displayIndex <= props.nodrizaPictures.length-1)) {
    props.nodrizaPictures.map( p => p.display = 'none');
    props.nodrizaPictures[props.displayIndex].display = 'flex';
  }

  return(<div>
    {props.nodrizaPictures.map((nodrizaPicture, index) => (
      <div key={index}>
        <ImageCard {...nodrizaPicture} index={index} />
      </div>
    ))}
  </div>
  )
}

const ImageCard = (props) => {
  const { picturePath, name, description, display } = props
  return (
    <div className="card-wrapper" style={{ display }}>
      <img src={picturePath} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className="company">{description}</div>
      </div>
    </div>
  )
}

const VideoCard = () => {
  return (
    <div className="card-wrapper">
      <div className="info">
        <div className="name">Video</div>
        <div className="company">
          Sound System e Instalación de tabla suplemento
        </div>
      </div>
      <video width="320px" controls>
        <source src="/img/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

const App = (props) => {
  const [index, changePicture] = useState(0);
  return (
    <div>
      <div className="header">
        <img
          className="header-picture"
          height="120px"
          src="/img/lanodriza.jpg"
          alt="logo"
        />
        {props.title}
        <br />
        {props.subtitle.toUpperCase()}
      </div>

      <div className="content">
        <p className="block-anuncio">
          Se vende furgoneta Volkswagen Transporter convertida en campervan
          homologada.
        </p>
        <div className="block-equipamiento">
          <ul>
            <li>Año 1994</li>
            <li>Motor 1.9TD</li>
            <li>316.929 Km</li>
            <li>3 Plazas</li>
          </ul>
          <ul>
            <li>Depósito de agua</li>
            <li>Cama (con tabla extensión quita y pon)</li>
            <li>Mueble despensa</li>
            <li>Cocina Camping Gaz</li>
            <li>Cajón enseres cocina y cubiertos</li>
            <li>Inversor 220V</li>
            <li>Conjunto mesa y sillas</li>
            <li>Toldo y lateral Fiamma</li>
          </ul>
        </div>
      </div>
      <div className="block-gallery">
        <div>
          <CardList nodrizaPictures={data} displayIndex={index} />
          <div className="block-controls">
            <div className="controls">
              <button onClick={()=> changePicture(index === 0 ? index : index-1)}> Anterior </button>
              <button onClick={()=> changePicture(index >= (data.length-1) ? index : index+1)}> Siguiente </button>
            </div>
          </div>
        </div>
        { <VideoCard /> }
      </div>



    </div>
  )
}

export default App
