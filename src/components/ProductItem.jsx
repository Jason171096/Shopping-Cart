import React, {useContext} from 'react';
import '@styles/ProductItem.scss';
import iconAddToCart from '@icon/bt_add_to_cart.svg'
import {AppContext} from '@hooks/AppContext'

const ProductItem = ({product}) => {

	const { addToCart } = useContext(AppContext)
	return (
		<div className="ProductItem">
			<img src={product.image} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => addToCart(product)}>
					<img src={iconAddToCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
