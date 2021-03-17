import React from 'react';
import './index.css';


export default function ListProducts ({productItems}) {
    console.log(productItems+"(((((((((((((((((");
    // productIcons.push(product);
    return (
        <div>
            {/* {console.log("im here" + productIcons)}
            <div className="listItem">{productIcons.map((item) => 
                <p key={item.toString()}>{item}</p>
            )}
            </div>   */}
            <ul>
                {productItems.map((item) => {
                    <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </div>
    )
}