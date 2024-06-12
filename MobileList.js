import React from 'react'
import './MobileList.css'
import './books.json'
function MobileList(props){
     //distructring
     const {image, product, price}=props;

    return(
        <div className="main">
            {console.log(props)}
            <img src= {image}/>
            <div className="container">
                <h2>{product}</h2>
            <p>{price}</p>
            <button>Add To Cart</button>
            </div>
        </div>
       
    )

}
export default MobileList;
