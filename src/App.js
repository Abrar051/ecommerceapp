import React,{Component} from "react";
import {Switch, Route,Link,BrowserRouter as Router} from "react-router-dom";
import AddProduct from "./components/AddProduct";

import Cart from "./components/Cart";
import Login from "./components/Login";
import ProductList from "./components/ProductList";

import Context from "./Context";


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null,
      cart: {},
      products:[]
    }
    this.routerRef = React.createRef();
  }

  render(){
    return (
      <Context.Provider
        value={{
          ...this.state,
          removeFromCart : this.removeFromCart,
          addToCart: this.addToCart,
          login: this.login,
          addProduct: this.addProduct,
          clearCart: this.clearCart,
          checkout: this.checkout
        }}
      >
        <Router ref = {this.routerRef}>
          <div className="App">
            <nav
              className
            ></nav>
          </div>
        </Router>
      </Context.Provider>
    )
  }
}