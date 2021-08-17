import React from 'react';
import emptyCartImg from '../assets/img/empty-cart.png'
import {NavLink} from "react-router-dom";

const EmptyCart = () => {
    return (
        <div>

            <div className="cart cart--empty">
                <h2>Корзина пустая <icon>😕</icon></h2>
                <p>
                    Чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <img src={emptyCartImg} alt="Empty cart"/>
                <NavLink to={'/home'}>
                    <button className="button button--black">
                        <span>Вернуться назад</span>
                    </button>
                </NavLink>

            </div>

        </div>
    );
};

export default EmptyCart;