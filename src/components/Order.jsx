import React from 'react';
import '@styles/Order.scss';
import iconFlechita from '@images/icon/flechita.svg'

const Order = () => {
	return (
		<div className="Order">
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<img src={iconFlechita} alt="arrow" />
		</div>
	);
}

export {Order};
