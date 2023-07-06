// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItemDetails, selectingThumbnail} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailItemDetails
  const onSelecting = () => {
    selectingThumbnail(id)
  }
  return (
    <li className="thumbnail-item">
      <button onClick={onSelecting} type="button">
        <img
          src={thumbnailUrl}
          className="thumbnail-image"
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
