import React, {useContext} from 'react';
import {AppContext} from '@hooks/AppContext'
import '@styles/OrderItem.scss';
import iconClose from '@icon/icon_close.png'

const OrderItem = ({product}) => {
	const {removeFromCart} = useContext(AppContext)
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.image} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={iconClose} alt="close" onClick={() => removeFromCart(product)}/>
		</div>
	);
}

export default OrderItem;
