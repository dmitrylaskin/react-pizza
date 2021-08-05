import React, {useEffect} from 'react'
import Header from "./Components/Header";
import Home from "./Components/Home";
import {Redirect, Route, Switch} from "react-router-dom";
import Cart from "./Components/Cart";
import {getPizzaItems} from "./Components/Redux/home-reducer";
import {useDispatch} from "react-redux";


const App = () => {

    const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getPizzaItems())
  }, [])

  return (
      <div className="wrapper">

        <Header/>

        <div className="content">
            <Switch>
                <Route exact path='/' render={() => <Redirect to={'/home'}/>}/>
                <Route path='/home' render={() => <Home/>}/>
                <Route path='/cart' render={() => <Cart/>}/>
                <Route path='*' render={() => <div><b>404 not found</b></div>}/>
            </Switch>

        </div>

      </div>
  );
};

export default App;
