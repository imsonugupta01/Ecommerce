import React from 'react';
import './HistoryCard.css';

function HistoryCard({ cartData, buyer,date }) {
    return (
        <div>
            {cartData.map((item, index) => (
                <div className="history-card-custom" key={index}>
                    <div className="product-details-custom">
                        <div className="product-image-custom">
                            <img src={item.product.prodimage} alt={item.product.producttitle} />
                        </div>
                        <div className="product-title-custom">{item.product.producttitle}</div>
                    </div>
                    <div className="purchase-details-custom">
                        <div className="product-price-custom">Price: {item.product.price}</div>
                        <div>Sold on : {date}</div>
                        <div>quantity : {item.quantity}</div>
                        <div className="buyer-custom">Buyer: {buyer}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HistoryCard;
