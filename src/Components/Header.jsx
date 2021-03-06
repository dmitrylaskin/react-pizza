import React from 'react';
import logo from "../assets/img/pizza-logo.svg";
import Button from "./Button";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
    const { totalCount, totalPrice } = useSelector(({ cartPage }) => {
        return {
            totalCount: cartPage.totalCount,
            totalPrice: cartPage.totalPrice,

        }
    })

    return (
        <div>
            <div className="header">
                <div className="container">

                    <NavLink to={'/home'}>
                        <div className="header__logo">
                            <img width="38" src={logo} alt="Pizza logo"/>
                            <div>
                                <h1>React Pizza</h1>
                                <p>самая вкусная пицца во вселенной</p>
                            </div>
                        </div>
                    </NavLink>

                    <div className="header__cart">

                        <Button btnStyle={'button--cart'} totalCount={totalCount} totalPrice={totalPrice}/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;