import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useCart } from "./CartContext";

import "./Header.css";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { cartItems, removeItemFromCart } = useCart();

  const isDesktop = useMediaQuery({
    query: "(min-width: 745px)",
  });
  const responsiveness = useMediaQuery({
    query: "(max-width: 744px)",
  });

  const handleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <header className="header">
      {isMobile && <div className="overlay"></div>}
      <section className="menu">
        {responsiveness && (
          <div className="menuImage" onClick={handleMenu}>
            <img
              src={`${isMobile ? "./icon-close.svg" : "icon-menu.svg"}`}
              alt="menu"
            />
          </div>
        )}
        {isMobile && (
          <div className="menuItemsMobile">
            <nav>
              <ul>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
        )}
        <div className="logo">
          <img src="./logo.svg" alt="logo" />
        </div>
        {isDesktop && (
          <div className="menuItemsDesktop">
            <nav>
              <ul>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
        )}
      </section>
      <section className="account">
        <div className="cart" onClick={handleCart}>
          <i className="fa-solid fa-cart-shopping"></i>
          <div
            className={`cart_quantity ${cartItems.length > 0 ? "active" : ""}`}
          >
            {cartItems.map((item, index) => (
              <div key={index} className="cart_quantity_number">
                <p>{item.quantity}</p>
              </div>
            ))}
          </div>
        </div>
        {openCart && (
          <div className="openCart">
            <span className="cart_name_top">Cart</span>
            <div
              className={`productsCart ${
                cartItems.length === 0 ? "empty" : ""
              }`}
            >
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <div className="cart_full">
                  {cartItems.map((item, index) => (
                    <div key={index} className="product_cart">
                      <div className="product_cart_items">
                        <div className="product_cart_image">
                          <img src={item.mainImage} alt="product" />
                        </div>
                        <div className="product_cart_name">
                          <h2>{item.productName}</h2>
                          <div className="product_cart_price">
                            <span className="price_sum">
                              ${item.productValue}.00 x {item.quantity}
                            </span>
                            <span className="price_final">
                              ${item.productFinalValue}.00
                            </span>
                          </div>
                        </div>
                        <div
                          className="product_cart_delete_icon"
                          onClick={() => removeItemFromCart(index)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </div>
                      </div>
                      <button
                        className="checkout_button"
                        onClick={() => removeItemFromCart(index)}
                      >
                        Checkout
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        <div className="profile">
          <img src="./image-avatar.png" alt="avatar" />
        </div>
      </section>
    </header>
  );
};
