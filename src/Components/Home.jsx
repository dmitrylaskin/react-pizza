import React from 'react';
import Categories from "./Categories";
import SortDropDown from "./SortDropDown";
import PizzaBlock from "./PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setActiveCategory, setVisibleDropDown} from "./Redux/home-reducer";

const Home = () => {

    const dispatch = useDispatch()

    const categoryToggle = (categoryName) => {
        dispatch(setActiveCategory(categoryName))
    }
    const dropDownToggle = (toggle) => {
        dispatch(setVisibleDropDown(toggle))
    }

    const { pizzaItems, visibleDropDown, categoryItems, activeCategory } = useSelector(({ homePage }) => {
        return  {
            pizzaItems: homePage.pizzaItems,
            visibleDropDown: homePage.visibleDropDown,
            categoryItems: homePage.categoryItems,
            activeCategory: homePage.activeCategory,
        }
    })

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