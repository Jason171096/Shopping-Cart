import React, {useContext, useState, useEffect} from 'react';
import '@styles/ProductItem.scss';
import iconAddToCart from '@icon/bt_add_to_cart.svg'
import iconAddedToCart from '@icon/bt_added_to_cart.svg'
import {AppContext} from '@hooks/AppContext'

const ProductItem = ({product}) => {
	const { addToCart, removeFromCart } = useContext(AppContext)
	const handleOnClick = () => {
		product.addedToCart ? removeFromCart(product) : addToCart(product)
	}
	return (
		<div className="ProductItem">
			<img src={product.image} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleOnClick()}>
					<img src={product.addedToCart ? iconAddedToCart : iconAddToCart} alt=""/>
				</figure>
			</div>
		</div>
	);
}

export { ProductItem };
