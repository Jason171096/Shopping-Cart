import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import { AppContext } from "@hooks/AppContext";
import { Menu } from "@components/Menu";
import { MyOrder } from "@containers/MyOrder";
import logoYardSale from "@image/logo_yard_sale.svg";
import iconShoppingCart from "@icon/icon_shopping_cart.svg";
import iconMenu from "@icon/icon_menu.svg";
import { HeaderMobile } from "./HeaderMobile";
import { PortalFinishTodo, PortalHeaderMenu } from "./PortalHeader";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
  const [toggleMyOrder, setToggleMyOrder] = useState(false);
  const {
    state: { cart },
  } = useContext(AppContext);
  return (
    <nav>
      <img
        src={iconMenu}
        alt="menu"
        className="menu"
        onClick={() => setToggleMenuMobile(true)}
      />
      <div className="navbar-left">
        <img src={logoYardSale} alt="logo" className="navbar-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={() => setToggle(!toggle)}>
            bboyace10@gmail.com
          </li>
          <li className="navbar-shopping-cart">
            <img
              src={iconShoppingCart}
              alt="shopping cart"
              onClick={() => {
                setToggleMyOrder(!toggleMyOrder);
              }}
            />
            {cart.length > 0 && <div>{cart.length}</div>}
          </li>
        </ul>
      </div>
      {toggleMenuMobile && (
        <PortalHeaderMenu>
          <HeaderMobile setToggleMenuMobile={setToggleMenuMobile} />
        </PortalHeaderMenu>
      )}
      {toggle && <Menu />}
      {toggleMyOrder && <MyOrder setToggleMyOrder={setToggleMyOrder} />}
    </nav>
  );
};

export { Header };
