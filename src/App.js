import React, {useState} from 'react'
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import SortDropDown from "./Components/SortDropDown";
import Home from "./Components/Home";
import {Route, Switch} from "react-router-dom";
import Cart from "./Components/Cart";


function App() {

  const categoryItems = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const [activeCategory, setActiveCategory] = useState(categoryItems[0])
  const [visibleDropDown, setVisibleDropDown] = useState(false)

  const categoryToggle = (categoryName) => {
    setActiveCategory(categoryName)
  }
  const dropDownToggle = (toggle) => {
    setVisibleDropDown(toggle)
  }

  return (
      <div className="wrapper">

        <Header/>

        <div className="content">
            <Switch>
                <Route path='/home' render={() => <Home activeCategory={activeCategory} visibleDropDown={visibleDropDown} categoryToggle={categoryToggle} dropDownToggle={dropDownToggle}/>}/>
                <Route path='/cart' render={() => <Cart/>}/>
                <Route path='*' render={() => <div><b>404 not found</b></div>}/>
            </Switch>

        </div>

      </div>
  );
}

export default App;
