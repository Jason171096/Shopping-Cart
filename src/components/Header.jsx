import React from 'react';
import '../styles/Header.scss'
import iconMenu from '../images/icon/icon_menu.svg'
import logoYardSale from '../images/image/logo_yard_sale.svg'
import iconShoppingCart from '../images/icon/icon_shopping_cart.svg'

const Header = () => {
  return (
    <nav>
      <img src={iconMenu} alt="menu" className="menu" />
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
          <li className="navbar-email">platzi@example.com</li>
          <li className="navbar-shopping-cart">
            <img src={iconShoppingCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };
