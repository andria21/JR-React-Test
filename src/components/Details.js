import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, company, img, info, price, title, inCart} = 
                    value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* TITLE */}

                            {/* END OF A TITLE */}
                            {/* PRODUCT INFO */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                {/* PRODUCT Text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2 className="fw-bold">{title}</h2>
                                    <h4 className="text-title text-capitalize mt-3 mb-2">
                                        size : 
                                        <span className="btn btn-black mx-1">
                                        XS
                                    </span>
                                    <span className="btn buttonbg mx-1">
                                                {company}
                                    </span>
                                    <span className="btn btn-black mx-1">
                                        M
                                    </span>
                                    <span className="btn btn-black mx-1">
                                        L
                                    </span>
                                    </h4>
                                    <h4 className="fw-bold">
                                        <strong>
                                            price : <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <ButtonContainer disabled={inCart ? true : false}
                                        onClick={()=> {
                                            value.addToCart(id);
                                            
                                        }}
                                        cart
                                        >
                                            {inCart ? "inCart" : "Add to cart"}
                                        </ButtonContainer>

                                    <h5 className="text-capitalize fw-bold mt-3 mb-0">
                                        some info about product:
                                    </h5>
                                    <p className="text-muted lead">{info}</p>   
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;