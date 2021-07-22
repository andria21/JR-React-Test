import React, { Component } from 'react';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default  class Cart extends Component {
    render() {
        return (

            <ProductConsumer>
                {value => {
                    const {cart} = value;
                    if(cart.length > 0) {
                        return(
                            <React.Fragment>
                                <h1 className="cart-text">Cart</h1>
                                <CartList value={value} />
                                <CartTotals value={value} />
                                
                            </React.Fragment>
                          
                        );
                    }
                    else {
                        return <EmptyCart />;
                    }
                }}
            </ProductConsumer>

        );
    }
}