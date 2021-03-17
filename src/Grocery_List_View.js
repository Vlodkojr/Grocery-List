import React, {useEffect} from 'react';
import './index.css';
import ListProducts from './ListProducts';


export default function List_Viev ({product, setProductItems, productItems}) {
    // let productIcons = [];
    // if (product !== ""){}
        // console.log("productIcons " + productItems);
        // useEffect(()=>{
        //     setProductItems(product);
        // }, [product])

    // productIcons.push(product);
    console.log("55");
    console.log(product)

    return(
        <div className= "listWrapper">
            <ListProducts productItems = {productItems} />
        </div>
    )
}