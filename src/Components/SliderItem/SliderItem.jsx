import './SliderItem.css'

const SliderItem = ({img, itemIndex, zoomImage}) => {

  return(
    <div 
      onClick={() => zoomImage(itemIndex)}
      className="slider-item">
      <img src={img}/>
    </div>
  )
}

export default SliderItem;