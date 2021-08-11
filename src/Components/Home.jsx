import React from 'react';
import Categories from "./Categories";
import SortDropDown from "./SortDropDown";
import PizzaBlock from "./PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setActiveCategory, setVisibleDropDown} from "./Redux/home-reducer";
import MyLoader from "./MyLoader";
import {addPizza} from "./Redux/cart-reducer";

const Home = () => {

    const dispatch = useDispatch()

    const categoryToggle = (categoryName) => {
        dispatch(setActiveCategory(categoryName))
    }
    const dropDownToggle = (toggle) => {
        dispatch(setVisibleDropDown(toggle))
    }
    const onAddPizza = (pizzaObj) => {
        dispatch(addPizza(pizzaObj))
    }

    const { pizzaItems, visibleDropDown, categoryItems, activeCategory, isLoading, sortBy, sortTypeItems } = useSelector(({ homePage }) => {

        return  {
            pizzaItems: homePage.pizzaItems,
            visibleDropDown: homePage.visibleDropDown,
            categoryItems: homePage.categoryItems,
            activeCategory: homePage.activeCategory,
            isLoading: homePage.isLoading,
            sortBy: homePage.sortBy,
            sortTypeItems: homePage.sortTypeItems,
        }
    })

    const { addedPizzas } = useSelector(({ cartPage }) => ({addedPizzas : cartPage.addedPizzas}))


    return (
            <div className="container">
                <div className="content__top">

                    <Categories categoryToggle={categoryToggle} categoryItems={categoryItems} activeCategory={activeCategory}/>

                    <SortDropDown visibleDropDown={visibleDropDown} dropDownToggle={dropDownToggle} sortBy={sortBy} sortTypeItems={sortTypeItems}/>

                </div>

                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">

                    {isLoading
                        ? Array(10).fill(0).map((_, idx) => <MyLoader key={idx}/>)
                        : pizzaItems && pizzaItems.map(pizzaItem => <PizzaBlock addedPizzaCount={addedPizzas[pizzaItem.id] && addedPizzas[pizzaItem.id].length} onAddPizza={onAddPizza} pizzaItem={pizzaItem} key={pizzaItem.id}/>)}

                </div>
            </div>
    );
};

export default Home;