import './ProductsItems.css'

const ProductsItems = ({productDataitems, onAdd, fullItem}) => {

  return (
    <div className='product-data'>
        {
          productDataitems.map((product) => {
            return(
                  <div key={product.id} className="products-items">
                    <div className='img-box' onClick={() => fullItem(product)} >
                      <img src={product.url} />
                    </div>
                    <div className='info-data'>
                      <div>
                        <h2>{product.title}</h2>
                        <span>{product.price}$</span>
                      </div>
                        <button onClick={() => onAdd(product)}>+</button>
                    </div>
                  </div>
            )
          })
        }
    </div>
  )
}

export default ProductsItems;