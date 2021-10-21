import React from 'react'
import '@styles/HeaderMobile.scss'
import iconClose from '@icon/icon_close.png'

const HeaderMobile = ({setToggleMenuMobile}) => {
    return (
        <div className="mobile-menu">
          <div className="close-menu" onClick={() => setToggleMenuMobile(false)}>
            <img src={iconClose} alt="icon-close" />
          </div>
    <ul>
      <li>
        <a href="/">CATEGORIES</a>
      </li>
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
        <a href="/">Other</a>
      </li>
    </ul>

    <ul>
      <li>
        <a href="/">My orders</a>
      </li>
      <li>
        <a href="/">My account</a>
      </li>
    </ul>

    <ul>
      <li>
        <a href="/" className="email">platzi@example.com</a>
      </li>
      <li>
        <a href="/" className="sign-out">Sign out</a>
      </li>
    </ul>
  </div>
    )
}

export {HeaderMobile}
