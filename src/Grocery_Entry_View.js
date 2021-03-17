import React, {useRef} from 'react';
import './index.css';


export default function Entry_View ({setProduct, addItem}) {
    const valueRef = useRef(); 

    const handleClick = () => {
        setProduct(valueRef.current.value);
    }

    const enterClick = (e) => { 
        if(e.charCode === 13) {           
            e.preventDefault();
            setProduct(valueRef.current.value);
        }
    }

    return(
        <form className="entryWrapper" onSubmit={addItem}>
            <input type="text" placeholder="Enter the product..." ref={valueRef} onKeyPress={enterClick}></input>
            <button onClick={handleClick}>Submit</button>
        </form>
    )
}