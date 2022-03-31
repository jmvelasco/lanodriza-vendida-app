import React, { useState } from 'react'
import { CardList } from './CardList'

export const Gallery = (props) => {
  const [index, changePicture] = useState(0)

  const resetVideo = (videoElem) => {
    videoElem.pause()
    videoElem.currentTime = 0
  }

  const previousPicture = () => {
    if ('video' === props.pictures[index].resourceType) {
      resetVideo(props.pictures[index].inputRef.current)
    }
    changePicture(index === 0 ? index : index - 1)
  }

  const nextPicture = () => {
    if ('video' === props.pictures[index].resourceType) {
      resetVideo(props.pictures[index].inputRef.current)
    }
    changePicture(index >= props.pictures.length - 1 ? index : index + 1)
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
