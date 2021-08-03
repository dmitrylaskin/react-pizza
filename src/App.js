import React, {useEffect, useState} from 'react'
import Header from "./Components/Header";
import Home from "./Components/Home";
import {Redirect, Route, Switch} from "react-router-dom";
import Cart from "./Components/Cart";
import {setVisibleDropDown} from "./Components/Redux/home-reducer";
import {connect} from "react-redux";


function App({setVisibleDropDown, visibleDropDown}) {
    
    const categoryItems = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const [activeCategory, setActiveCategory] = useState(categoryItems[0])
  //const [visibleDropDown, setVisibleDropDown] = useState(false)

  const categoryToggle = (categoryName) => {
    setActiveCategory(categoryName)
  }
  const dropDownToggle = (toggle) => {
    setVisibleDropDown(toggle)
  }

    const [pizzaItems, setPizzaItems] = useState()

  useEffect(() => {
      const fetchData = async () => {
          let response = await fetch('http://localhost:3000/db.json')
          let data = await response.json()
          setPizzaItems(data.pizzas)
      }
      fetchData()

  }, [])

  return (
      <div className="wrapper">

        <Header/>
        

        <div className="content">
            <Switch>
                <Route exact path='/' render={() => <Redirect to={'/home'}/>}/>
                <Route path='/home' render={() => <Home pizzaItems={pizzaItems}
                                                        activeCategory={activeCategory}
                                                        visibleDropDown={visibleDropDown}
                                                        categoryToggle={categoryToggle}
                                                        dropDownToggle={dropDownToggle}/>}/>
                <Route path='/cart' render={() => <Cart/>}/>
                <Route path='*' render={() => <div><b>404 not found</b></div>}/>
            </Switch>

        </div>

      </div>
  );
}

const mapStateToProps = (state) => {

    return {
        visibleDropDown: state.homePage.visibleDropDown
    }
}


export default connect(mapStateToProps,{setVisibleDropDown})(App);
