import React from 'react'

function OrderCard({cartdata,date}) {
  return (
    <div>
            {cartdata.map((item, index) => (
                <div className="history-card-custom" key={index}>
                    <div className="product-details-custom">
                        <div className="product-image-custom">
                            <img src={item.product.prodimage} alt={item.product.producttitle} />
                        </div>
                        <div className="product-title-custom">{item.product.producttitle}</div>
                    </div>
                    <div className="purchase-details-custom">
                        <div className="product-price-custom">Price: {item.product.price}</div>
                        <div>Purchased on : {date}</div>
                        <div>quantity : {item.quantity}</div>
                        <div className="buyer-custom">Date: {date}</div>
                    </div>
                </div>
            ))}
        </div>
  )
}

export default OrderCard