import React, {useEffect} from 'react'
import Header from "./Components/Header";
import Home from "./Components/Home";
import {Redirect, Route, Switch} from "react-router-dom";
import Cart from "./Components/Cart";
import {setPizzaItems} from "./Components/Redux/home-reducer";
import {useDispatch} from "react-redux";
import {homeAPI} from "./Api/api";


const App = () => {

    const dispatch = useDispatch()

  useEffect(() => {

      const fetchData = async () => {
          let response = await homeAPI.getPizzas()
          dispatch(setPizzaItems(response.data))
      }
      fetchData()
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
