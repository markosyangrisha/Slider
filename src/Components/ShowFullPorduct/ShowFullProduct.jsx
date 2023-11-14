import './ShowFullProduct.css'

const ShowFullProduct = ({fullProduct, onAdd, fullItem}) => {
  return(
    <div className='full__item'>
      <div>
      <div className='product-data'>
              <div className="products-full__items">
                <div className='img-box' onClick={() => fullItem(fullProduct)} >
                  <img src={fullProduct.url} />
                </div>
                <div className='info-data'>
                  <div>
                    <h2>{fullProduct.title}</h2>
                    <span>{fullProduct.price}$</span>
                  </div>
                    <button onClick={() => onAdd(fullProduct)}>+</button>
                </div>
              </div>
  </div>
      </div>
      
    </div>
       
  )
}

export default ShowFullProduct;