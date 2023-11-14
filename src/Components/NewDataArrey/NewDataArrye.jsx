import {FaTrash} from 'react-icons/fa'
import './NewDataArrey.css'

const NewDataArrey = ({item, onDelete}) => {
    return(
      <div className="new-data">
       <div className='new-info'>
          <img src={item.url} />
            <div>
              <h2>{item.title}</h2>
              <span>{item.price}$</span>
            </div>
       </div>
        <FaTrash className='delate__icon' onClick={() => onDelete(item.id)} />
      </div>
    )
}

export default NewDataArrey;
