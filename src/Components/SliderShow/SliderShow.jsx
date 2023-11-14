import './SliderShow.css';
import SliderItem from "../SliderItem/SliderItem";
import SliderLeft from '../SliderPath/SliderLeft';
import SliderRight from '../SliderPath/SliderRight';
import { useState } from 'react';
import DeleteImage from '../DeleteImages/DeleteImages';

const SliderShow = () => {
  
  const [imagesArrey, setSliderDataArrey] = useState([
    {
      id: 1,
      slidImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 2,
      slidImg: "https://images.pexels.com/photos/1319750/pexels-photo-1319750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      slidImg: "http://www.world-art.ru/cinema/img/10000/5410/xqfa.jpg",
    },
    {
      id: 4,
      slidImg: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",
    },
    {
      id: 5,
      slidImg: "https://www.okino.ua/media/var/selection/2017/03/08/filmy-pro-krasivyh_jpg_770x430_crop_q70.jpg",
    }
  ]);
  const [index, setIndex] = useState(0);

  const nextClick = () => {
    if(index >= imagesArrey.length - 1) {
        return setIndex(0)
    }
    setIndex(index + 1)
  }

  const prevClick = () => {
    if(index <= 0) {
      return setIndex(imagesArrey.length - 1) 
    }
    setIndex(index - 1)
  }

  const deleteImage = () => {
    setSliderDataArrey(imagesArrey.filter((_, itemIndex) => index !== itemIndex))
  }

  const zoomImage = (imageItemIndex) => {
    setIndex(imageItemIndex)
  }

  return(
    <div className='container'>
      <div className="slider-show">
          <div className='main-picture'>
            <SliderLeft prevClick={prevClick} />
              {
                imagesArrey.length > 0 ? <img id={imagesArrey[index].id} src={imagesArrey[index].slidImg} /> : <h1>No Images</h1>
              }
            <SliderRight nextClick={nextClick} />
          </div>   
      </div>
      <DeleteImage deleteImage={deleteImage} />
      <div className='down-img'>
          {
              imagesArrey.map((slid, itemIndex) => {
                return(
                  <div key={slid.id}> 
                      <SliderItem
                        img={slid.slidImg}
                        itemIndex={itemIndex}
                        zoomImage={zoomImage}
                      />
                  </div>
                )
              })
            }
      </div>
    </div>
   
  )
}

export default SliderShow;