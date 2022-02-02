import './App.css';
import { Header } from './components/Header';
import { Cart } from './components/Cart';
import { Main } from './components/Main';
import data from './components/Data';
import { useState } from 'react/cjs/react.development';
import { Example } from './components/Example';
function App() {
  const [productlist, setProduct] = useState(data["products"])
  // const {products}=data
  const [cartItems, setcartItems] = useState([])
  const no_Items=cartItems.length
  const onAdd = (product) => {
    let exist = cartItems.find((item) => item.id == product.id)
    if (exist) {
      let updatedcart = cartItems.map((x) => {
        return x.id == product.id ? { ...exist, qty: exist.qty + 1 } : { ...x };
      })
      setcartItems(updatedcart);

    }
    else {
      setcartItems([...cartItems, { ...product, qty: 1 }])
    }
  }
  const onRemove=(product)=>{
    if(product.qty==1)
    {
      let new_cartItems= cartItems.filter((item)=>{
        if(product.qty==1)
        {
          return(item.id !=product.id)
        }

      })
      setcartItems(new_cartItems)
    }else{
     setcartItems(cartItems.map((item)=>{
        return item.id==product.id?{...product,qty:product.qty-1}:{...item}
      }))
    }

  }
  return (
    <div>
      <Header length={no_Items} />
      <br></br>
      <div className="row block">
        <div className="col-sm-9">
          <Main products={productlist} onAdd={onAdd} />
        </div>
        <div className="col-sm-3">
          <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>

        </div>
      </div>
      <Example/>
    </div>
  );
}

export default App;




// useeffect hook,function side effect    *******interview questions********