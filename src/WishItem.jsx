import React from "react";
import wishItems from "./store/wishItems";




const WishItem=({wish, onDelete})=> {
   
const handleDel=()=>{
    
    onDelete(wish.id)
}

  return (
    <div className="WishItem" >
        <div className="Item">
            <div className="ItemName">{wish.name}</div>
            <button className="ItemDelBut" onClick={handleDel}>delete</button>
        </div>
      
    </div>
  );
}

export default WishItem;