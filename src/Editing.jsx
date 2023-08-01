import React from "react";
import wishItems from "./store/wishItems";
import WishItem from "./WishItem";
import { useState } from "react";




const Editing=()=> {
    const wish=wishItems.wish

    const [newItem, setNewItem]=useState("")

    const handleAdd=()=>{
        if(newItem.trim() !==""){
            wishItems.addWishItem({
                id: wishItems.wish.length+1,
                name:newItem,
            });
            setNewItem('')
        }
    }

  return (
    <div className="Edition" >
        <p>Editing</p>
        <div>
            <input value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>
            <button onClick={handleAdd}>add</button>
        </div>
        <div className="WishList">
            {wish.map((wish)=>(
                <WishItem key={wish.id} wish={wish}/>
            ))}
        </div>
    </div>
  );
}

export default Editing;