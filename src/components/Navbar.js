import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 justify-content-center">
               <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link navbar-brand women active">
                            WOMEN
                        </Link>
                    </li>

                    <li>
                        <Link to="/" className="nav-link navbar-brand men" >
                                MEN
                        </Link>
                    </li>

                    <li>
                        <Link to="/" className="nav-link navbar-brand kids">
                            KIDS
                        </Link>
                    </li>
                    <li className="icon">
                        <img src="img/svg.png" alt="svg" />
                    </li>
                    <li className="dropdown">
                        <button className="dropbtn">$
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a>$ USD</a>
                            <a>€ EUR</a>
                            <a>¥ JPY</a>
                        </div>
                    </li>
               </ul>
               <Link to='/cart' className="cart">
                <div className="dropdownn">
                   <button className="button">
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                   </button>
                   
                    <div className="dropdown-contentt">

                    </div>
                </div>
               </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainWhite);
    .nav-link{
        color: var(--mainDark) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;