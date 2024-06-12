import React from 'react';
import MobileList from './MobileList';
import books from './books.json'


function Mobile(){
    return(
        <div>
            {books.map((ele)=>{
                return <MobileList
                image={ele.image}
                product={ele.product}
                price={ele.price}


                />
            })}
          

            

          

        </div>
    )
}

export default Mobile;
