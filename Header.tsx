import "./Header.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const isDesktop = useMediaQuery({
    query: "(min-width: 740px)",
  });
  const responsiveness = useMediaQuery({
    query: "(max-width: 739px)",
  });

  const handleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="header">
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
        <div className="cart">
          <img src="./icon-cart.svg" alt="cart" />
        </div>
        <div className="profile">
          <img src="./image-avatar.png" alt="avatar" />
        </div>
      </section>
    </div>
  );
};
