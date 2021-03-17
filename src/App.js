import './index.css';
import Grocery_Entry_View from './Grocery_Entry_View';
import Grocery_List_View from './Grocery_List_View';
import React, {useState, useEffect} from 'react';

function App() {
  const [product, setProduct] = useState("");
  const [productItems, setProductItems] = useState([]);

  const addItem = event => {
    event.preventDefault();
    setProductItems([
      ...productItems,
      {
        id: productItems.length,
        name: product
      }
    ]);
    setProduct("");
  };
  // let productIcons = [];
  // setProductIcons = () => productIcons.push(product)

  console.log("!!!!!!!!!!!!!!!!!111");
  return (
    <div className="wrapper">
      <div className="innerWrapper">
        <form onSubmit={addItem}>
          <Grocery_Entry_View setProduct = {setProduct}
                              addItem={addItem}
          />
        </form>
        <Grocery_List_View product = {product}
                           setProductItems = {setProductItems} 
                           productItems = {productItems}
        />
      </div>
    </div>
  );
}

export default App;
