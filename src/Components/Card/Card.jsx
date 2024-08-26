import React, { useContext } from "react";
import { StoreContext } from "../StoreContext";
import { assets } from "../../assets/assets";

function Card() {
  const { cardItem, food_list, removeFromCard, getTotalCardAmount } = useContext(StoreContext);

  return (
    <div className="Card  mt-32">
      <div className="card-items">
        <div className="card-items-title grid grid-cols-6 items-center text-zinc-600 text-base">
          <p>Items</p>
          <p>Titel</p>
          <p>Price</p>
          <p>Quanitiy</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cardItem[item._id] > 0) {
            return (
              <div>
                <div className="item grid grid-cols-6 items-center text-zinc-600 text-base py-2">
                  <img className="w-[50px]" src={item.image} alt="" />
                  <p> {item.name} </p>
                  <p>${item.price}</p>
                  <p> {cardItem[item._id]} </p>
                  <p>${` ${item.price * cardItem[item._id]}`} </p>
                  <p onClick={()=>removeFromCard(item._id)} className="text-xl cursor-pointer">X</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>


      <div className="card-bootom flex justify-between items-start py-20">
        <div className="card-total flex flex-col w-[50%] gap-5">
          <h1 className="text-2xl font-medium">Card Totals</h1>
          <div className="flex flex-col gap-2">
            <div className="card-total-details flex justify-between items-start">
              <p>Sub Total</p>
              <p> ${getTotalCardAmount()} </p>
            </div>
            <hr />
            <div className="card-total-details flex justify-between items-start">
              <p>Delivery fee</p>
              <p>${2} </p>
            </div>
            <hr />
            <div className="card-total-details flex justify-between items-start">
              <b>Total</b>
              <b> ${getTotalCardAmount() + 2} </b>
            </div>
          </div>
            <button className="bg-red-400 rounded py-2 w-[50%] text-white transform duration-200 ease-in-out hover:bg-red-500">Proceed to check out</button>
        </div>
        <div className="card-promocode">
          <div className="flex flex-col gap-5">
            <p>If you have a promocode, Enter here</p>
            <div className="card-promocode-input flex bg-zinc-300 rounded pl-4 ">
              <input type="text" className="border-none outline-none bg-transparent" placeholder="Promocode" />
              <button className="bg-zinc-800 px-4 py-3 text-white rounded">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
