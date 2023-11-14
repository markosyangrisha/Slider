import Header from './Components/Header/Header';
import ProductsItems from './Components/PorductsItems/ProductsItems'
import Footer from './Components/Footer/Footer';
import Categoris from './Components/Categoris/Categoris'
import ShowFullProduct from './Components/ShowFullPorduct/ShowFullProduct';
import { useState } from 'react';
import './App.css';

function App() {
  
  const productDataArrey = [
    {
      id: 1,
      price: 100,
      title: 'vodka',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvbfG4Lu0nXFlmRN4LBCXa9KFfZd_d8uNwkQ&usqp=CAU'
    },
    {
      id: 2,
      price: 300,
      title: 'wisski',
      url: 'https://static.toiimg.com/photo/70994944.cms'
    },
    {
      id: 3,
      price: 400,
      title: 'beer',
      url: 'https://thekitchencommunity.org/wp-content/uploads/2022/01/upscale-drinks.jpg'
    },
    {
      id: 4,
      price: 200,
      title: 'jucy',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yJpdHLusqZhTMSUm2LfMFbpFNJacmZ-oFg&usqp=CAU'
    },
    {
      id: 5,
      price: 500,
      title: 'coctel',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDNjwURfiAUwhAXy1AcF_wdNXDCKpweQHqw&usqp=CAU'
    },
    {
      id: 6,
      price: 200,
      title: 'fresh',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz6ibOAFCx1zQGhk8DVeapwoEjUcb5p1YoKQ&usqp=CAU'
    }
  ];
  const [newDataArrey, setNewDataArrey] = useState([]);
  const [filterDataArrey, setFilterDataArrey] = useState([...productDataArrey]);
  const [fullProduct, setfullProduct] = useState(false)
  const [runItem, setRunItem] = useState([])
 
  const onAdd = (product) => {
    let isArrey = false;
    newDataArrey.forEach((el) => {
      if(el.id === product.id) {
        isArrey = true;
      }
    })
    if(!isArrey) setNewDataArrey([...newDataArrey, product])
  }

  const onDelete = (id) => {
    setNewDataArrey(newDataArrey.filter(el => el.id !== id))
  }

  const chooseCategoy = (category) => {
    if(category === "all") {
      setFilterDataArrey(productDataArrey)
      return
    }
    setFilterDataArrey(productDataArrey.filter((el) => el.title === category))
  }

  const fullItem = (product) => {
    setRunItem(product)
    setfullProduct(!fullProduct)
  }

  return (
    <div className="App">
        <Header newDataArrey={newDataArrey} onDelete={onDelete} />
        <Categoris chooseCategoy={chooseCategoy} />
        <ProductsItems productDataitems={filterDataArrey} onAdd={onAdd} fullItem={fullItem} /> 
        {fullProduct && <ShowFullProduct fullProduct={runItem} onAdd={onAdd} fullItem={fullItem}  />}
        <Footer />
    </div>
  );
}

export default App;
