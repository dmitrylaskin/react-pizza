import React from 'react';
import Categories from "./Categories";
import SortDropDown from "./SortDropDown";
import PizzaBlock from "./PizzaBlock";

const Home = ({categoryToggle, categoryItems, activeCategory, visibleDropDown, dropDownToggle, pizzaItems}) => {
    return (
            <div className="container">
                <div className="content__top">

                    <Categories categoryToggle={categoryToggle} categoryItems={categoryItems} activeCategory={activeCategory}/>

                    <SortDropDown visibleDropDown={visibleDropDown} dropDownToggle={dropDownToggle}/>

                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {pizzaItems && pizzaItems.map(pizzaItem => <PizzaBlock pizzaItem={pizzaItem} key={pizzaItem.id}/>)}
                </div>
            </div>
    );
};

export default Home;