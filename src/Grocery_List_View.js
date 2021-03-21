import React, {useState, useEffect} from 'react';
import './index.css';
import ListProducts from './ListProducts';


export default function List_View ({product, setProductItems, productItems}) {
    // const [productItems, setProductItems] = useState([]);

    // let productIcons = [];
    // if (product !== ""){}
        // console.log("productItems " + productItems);
        // useEffect(()=>{
        //     setProductItems({value: product}, ...productItems);
        // }, [product])

    // setProductItems({product});
    console.log("55");
    // console.log(product);

    return(
        <div className = "listWrapper">
            {/* <ul>
                {productItems.map((product) => {
                    <li key={product.id}>{product.name}</li>
                })}
            </ul> */}
            <ListProducts productItems = {productItems} />
        </div>
    )
}