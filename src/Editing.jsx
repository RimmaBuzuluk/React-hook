import React from "react";
import wishItems from "./store/wishItems";
import WishItem from "./WishItem";




const Editing=()=> {
    const wish=wishItems.wish

  return (
    <div className="Edition" >
        <p>Editing</p>
        <div>
            <input/>
            <button>add</button>
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