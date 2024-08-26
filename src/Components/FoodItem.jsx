import React, { useContext  } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "./StoreContext";

function FoodItem({ id, name, price, description, image }) {

     
    const{cardItem, addToCard, removeFromCard} = useContext(StoreContext)



  return (
    <div className="food-item w-full flex-auto shadow-2xl rounded-md">
      <div className="food-item-image-container relative">
        <img className="rounded-t-xl" src={image} alt="Food-item-Image" />
            
        {!cardItem[id] ?
            <img className="add absolute bottom-2 right-2 w-[38px]" onClick={()=>addToCard(id)} src={assets.add_icon_white} alt="" />
            :
            <div className="food-item-count absolute bottom-2 right-2 flex justify-between items-center gap-2 bg-white rounded-full p-1">
                    <img onClick={()=>removeFromCard(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cardItem[id]}</p>
                    <img onClick={()=>addToCard(id)} src={assets.add_icon_green} alt="" />
            </div>



        }


      </div>
      <div className="food-itme-info p-5">
        <div className="food-list-name-rading flex justify-between items-center mb-5">
          <h1 className="text-xl font-bold">{name}</h1>
          <img src={assets.rating_starts} alt="" />
        </div>

        <p className="font-medium text  -zinc-500">{description}</p>
        <p className="text-xl text-red-500 font-semibold">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
