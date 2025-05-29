// ProductList.jsx (Updated with fixed layout)
import React, { useState } from "react";
import "./ProductList.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItems, selectCartTotalQuantity } from "./CartSlice";

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectCartTotalQuantity);

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image:
            "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15",
        },
        {
          name: "Spider Plant",
          image:
            "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12",
        },
      ],
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image:
            "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3",
          description: "Calming scent, used in aromatherapy.",
          cost: "$20",
        },
        {
          name: "Jasmine",
          image:
            "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3",
          description: "Sweet fragrance, promotes relaxation.",
          cost: "$18",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="navbar">
        <div className="nav-left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2608/2608946.png"
            alt="Logo"
            className="logo"
          />
          <a href="/" onClick={handleHomeClick} className="brand">
            <h2>Green Haven</h2>
            <i>Nature in Every Corner</i>
          </a>
        </div>
        <div className="nav-center">
          <h3 className="page-title">Plants</h3>
        </div>
        <div className="nav-right">
          <a href="#" onClick={handleCartClick}>
            <div className="cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                height="48"
                width="48"
              >
                <circle cx="80" cy="216" r="12" />
                <circle cx="184" cy="216" r="12" />
                <path
                  d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <span className="cart-quantity">{totalQuantity}</span>
            </div>
          </a>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((section) => (
            <div key={section.category}>
              <h2 className="plant_heading">{section.category}</h2>
              <div className="plant-section">
                {section.plants.map((plant) => (
                  <div key={plant.name} className="product-card">
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p>{plant.cost}</p>
                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={!!addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
