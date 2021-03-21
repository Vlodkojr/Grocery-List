import React, {useState, useEffect, useRef} from 'react';
import './index.css';


export default function Entry_View ({setProduct, product, productItems, setProductItems}) {
    const valueRef = useRef(); 
    // useEffect(() => setProductItems(() => [{value: product}, ...productItems]), [product]);
    // const text = product;

    const inputTextChange = (e) => {
        setProduct(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        // setProduct(valueRef.current.value);
        addToArray();
        refreshInput();
    }

    const enterClick = (e) => { 
        if(e.charCode === 13) {           
            e.preventDefault();
            // setProduct(valueRef.current.value);
            addToArray();
            refreshInput();
        }
    }

    const addToArray = () => {
        setProductItems([{value: product, completed: false}, ...productItems]);
    }

    const refreshInput = () => {
        valueRef.current.value = "";
    }

    return(
        <form className="entryWrapper">
            <input type="text" placeholder="Enter the product..." ref={valueRef} onChange={inputTextChange} onKeyPress={enterClick}></input>
            <button onClick={handleClick}>Submit</button>
        </form>
    )
}