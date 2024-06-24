import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../Context/StoreContext";
import { toast } from "react-toastify";


const FoodItem = ({ id, name, description, image, price }) => {
  // const [itemCount,setItemCount]=useState(0);
  const { cartItems, addToCart, removeFromCart,url } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
{/*         <img className="food-item-image" src={url+"/images/"+image} alt="" /> */}
         <img
          className="food-item-image"
          // src={url+"/images/"+image}
          src={image}
          alt=""
        />

        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => {
              toast(<b>Item added to cart!</b>);

              addToCart(id);

              console.log("clicking");
            }}
            src={assets.add_icon_green}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => {
                toast(<b>Item removed from cart!</b>);
                removeFromCart(id);
              }}
              src={assets.remove_icon_red}
              alt=""
            />

            <p>{cartItems[id]}</p>
            <img
              onClick={() => {
              toast(<b>Item added to cart!</b>);

              addToCart(id);

              console.log("clicking");
            }}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-dec">{description}</p>
        <p className="food-item-price">RS. {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
