import React, { useState } from 'react'

import { CardList } from "./cardlist";
import { VideoCard } from "./videocard";

export const Gallery = (props) => {
    const [index, changePicture] = useState(0)

    return (
      <div className="block-gallery">
        <div>
          <CardList pictures={props.pictures} displayIndex={index} />
          <div className="block-controls">
            <div className="controls">
              <button onClick={() => changePicture(index === 0 ? index : index - 1)}>Anterior</button>
              <button onClick={() => changePicture(index >= props.pictures.length - 1 ? index : index + 1)}>Siguiente</button>
            </div>
          </div>
        </div>
        {<VideoCard />}
      </div>
    )
}

