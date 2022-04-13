import { ImageCard } from './ImageCard'
import { VideoCard } from './VideoCard'

export const CardList = (props) => {
  const { pictures, displayIndex } = props

  return (
    <div>
      {pictures[displayIndex].resourceType === 'video' ? (
        <VideoCard {...pictures[displayIndex]} />
      ) : (
        <ImageCard {...pictures[displayIndex]} />
      )}
    </div>
  )
}
