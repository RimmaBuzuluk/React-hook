import { makeAutoObservable } from "mobx";



class WishItems{
    wish=[
        {
            id:1, 
            name:"car"
        },
        {
            id:2, 
            name:"lego"
        },
        {
            id:3, 
            name:"iphone"
        },
        {
            id:4, 
            name:"book"
        }
        
    ];
    
    constructor(){
        makeAutoObservable(this)
    }

    addWishItem(newItem){
        this.wish.push(newItem)
    }

    removeWishItem(id) {
        this.wish = this.wish.filter((item) => item.id !== id);
      }
}

export default new WishItems();