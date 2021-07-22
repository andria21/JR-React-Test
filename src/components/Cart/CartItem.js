import React from 'react';

export default function CartItem({item, value}) {
    const {id,title,img,price,total,count,company} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div className="cart-row">
            <hr />
            <div className="cart-title">
                <p className="cart-text">{title}</p>
                
            </div>
            <div className="cart-price">
                <p className="cart-text">${price}</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <button className="card-btn">{company}</button>
            </div>
            <div className="card-img">
                <img src={img} className="imgg" alt="product" onClick={()=> removeItem(id)}/>
            </div>

            <div>
                <button className="btn btns mx-1" onClick={() => increment(id)}>
                    +
                </button>
                <p className="fw-bold para mx-1">{count}</p>            
                <button className="btn btns mx-1" onClick={() => decrement(id)}>
                    -
                </button>
            </div>

            {/** */}
            <div className="item-total">
                <strong> item total : $ {total}</strong>
            </div>
        </div>
    );
}