import React from "react";
import wishItems from "./store/wishItems";
import WishItem from "./WishItem";
import { useState } from "react";




const Editing=()=> {
    const wish=wishItems.wish
    const [newItem, setNewItem]=useState("")
    const [wishes, setWishes] = useState(wishItems.wish);


    const handleAdd = () => {
        if (newItem.trim() !== "") {
          const newWish = {
            id: Math.random(),
            name: newItem,
          };
          wishItems.addWishItem(newWish);
          setWishes([...wishes, newWish]);
          setNewItem("");
        }
      };

      const handleDelete = (id) => {
        wishItems.removeWishItem(id);
        setWishes(wishes.filter((wish) => wish.id !== id));
      };

  return (
    <div className="Edition" >
        <p>Editing</p>
        <div>
            <input value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>
            <button onClick={handleAdd}>add</button>
        </div>
        <div className="WishList">
            {wish.map((wish)=>(
                <WishItem key={wish.id} wish={wish} onDelete={handleDelete}/>
            ))}
        </div>
    </div>
  );
}

export default Editing;