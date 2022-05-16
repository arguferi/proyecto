import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "Computadora", price: 9459, quantity: 0 },
      { id: 2, productName: "Audífonos diadema", price: 4649, quantity: 0 },
      {
        id: 3,
        productName: "Audífonos Inalámbricos",
        price: 5599,
        quantity: 0,
      },
      {
        id: 4,
        productName: "Consola de videojuegos",
        price: 6439,
        quantity: 0,
      },
      { id: 5, productName: "Consola portátil rosa", price: 5679, quantity: 0 },
      { id: 6, productName: "Tableta digital", price: 6789, quantity: 0 },
    ],
  };
  render() {
    return (
      <div>
        <h4>Carrito de Compras</h4>

        <div>
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                id={prod.id}
                productName={prod.productName}
                price={prod.price}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
