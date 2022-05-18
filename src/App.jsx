import React, { Component } from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ShoppingCart />
      </React.Fragment>
    );
  }
}
