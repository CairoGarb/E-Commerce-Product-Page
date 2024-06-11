import { useState } from "react";
// @ts-ignore
import { data } from "./data.js";
import "./App.css";
import { Slider } from "./components/Slider.js";
import { SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { useCart } from "./components/CartContext.js";

export const App = () => {
  const [products] = useState(data);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const productValue = 125;
  const originalProductValue = 250;
  const productName = "Fall Limited Edition Sneakers";
  const [gallery, setGallery] = useState(false);
  const { addItemToCart } = useCart();

  const responsiveness = useMediaQuery({
    query: "(max-width: 744px)",
  });

  const settings = {
    spaceBetween: 50,
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
  };

  const handleGallery = () => {
    if (!responsiveness) {
      setGallery(!gallery);
    }
  };

  // Arrows (mobile) that changes the image that is showing
  const handlePrevArrow = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : products.length - 1
    );
  };

  const handleNextArrow = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex < products.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Add/Decrease quantity to add the cart
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const { mainImage, productId } = products[selectedIndex];

  const handleAddToCart = () => {
    const productFinalValue = productValue * quantity;
    if (quantity > 0) {
      const newItem = {
        productId,
        mainImage,
        productValue,
        quantity,
        productName,
        productFinalValue,
      };
      addItemToCart(newItem);
      setQuantity(0);
    }

    if (productId === productId) {
    }
  };

  return (
    <section className="app">
      {gallery && <div className="overlay"></div>}
      {gallery && (
        <div className="swiper_container">
          <Slider settings={settings} onClose={handleGallery}>
            {products.map((item: any) => (
              <SwiperSlide key={item.id}>
                <img src={item.mainImage} alt="product" />
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      )}

      <article className="images">
        <button className="nav_button left" onClick={handlePrevArrow}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <img
          className="main_image"
          src={mainImage}
          alt="product main"
          onClick={handleGallery}
        />
        <button className="nav_button right" onClick={handleNextArrow}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
        <ul>
          {products.map((item: any, index: any) => (
            <li
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className={`${index === selectedIndex ? "selected" : ""}`}
            >
              <img
                className="thumbnail_image"
                src={item.thumbnail}
                alt="product thumb"
              />
            </li>
          ))}
        </ul>
      </article>

      <article className="product_description">
        <span className="company_name">Sneaker Company</span>
        <h1 className="product_name">{productName}</h1>
        <p className="product_description_text">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer role, they'll withstand everything
          the weather can offer.
        </p>
        <div className="price">
          <div className="discount">
            <p className="price_discount">${productValue}.00</p>
            <span className="discount_value">50%</span>
          </div>
          <div className="normal">
            <p className="normal_price">${originalProductValue}.00</p>
          </div>
        </div>
        <div className="add_to_cart">
          <div className="quantity">
            <span onClick={decreaseQuantity}>-</span>
            <p>{quantity}</p>
            <span onClick={increaseQuantity}>+</span>
          </div>
          <button onClick={handleAddToCart}>
            <i className="fa-solid fa-cart-shopping"></i> Add to cart
          </button>
        </div>
      </article>
    </section>
  );
};
