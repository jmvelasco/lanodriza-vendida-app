import { ImageCard } from './ImageCard'
import { VideoCard } from './VideoCard'

export const CardList = (props) => {
  if (
    props.displayIndex >= 0 &&
    props.displayIndex <= props.pictures.length - 1
  ) {
    props.pictures.map((p) => (p.display = 'none'))
    props.pictures[props.displayIndex].display = 'flex'
  }

  return (
    <div>
      {props.pictures.map((nodrizaPicture, index) => (
        <div key={index}>
          {nodrizaPicture.resourceType === "video" 
            ? <VideoCard {...nodrizaPicture} index={index} /> 
            : <ImageCard {...nodrizaPicture} index={index} />}
        </div>
      ))}
    </div>
  )
}
