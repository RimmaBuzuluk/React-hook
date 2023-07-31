import React from "react";
import wishItems from "./store/wishItems";




const WishItem=({wish})=> {
   

  return (
    <div className="WishItem" >
        <div className="Item">
            <div className="ItemName">{wish.name}</div>
            <button className="ItemDelBut">delete</button>
        </div>
      
    </div>
  );
}

export default WishItem;