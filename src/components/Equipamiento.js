export const Equipamiento = () => {
  return (
    <div className="content">
      <p className="block-anuncio">
        Se vende Volkswagen Transporter<br/>
        convertida en campervan homologada.
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
      <div className="block-precio">
        <span>Precio: 3300 €</span>
        <span><img width={24} src="/email.png" alt="" /><a href="mailto: jmanuel.velasco@gmail.com">contactar</a></span>
      </div>
    </div>
  )
}
