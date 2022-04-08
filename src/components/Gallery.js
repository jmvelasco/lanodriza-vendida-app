import React, { useState } from 'react';
import { CardList } from './CardList';

export const Gallery = (props) => {
  const [index, changePicture] = useState(0);

  const previousPicture = () => {
    changePicture(index === 0 ? index : index - 1);
  }

  const nextPicture = () => {
    changePicture(index >= props.pictures.length - 1 ? index : index + 1);
  }

  return (
    <div className="block-gallery">
      <div>
        <CardList pictures={props.pictures} displayIndex={index} />
        <div className="block-controls">
          <div className="controls">
            <button onClick={previousPicture}>Anterior</button>
            <button onClick={nextPicture}>Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  )
}




