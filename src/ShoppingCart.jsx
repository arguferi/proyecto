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
      <div className="container-fluid">
        <h4>Carrito de Compras</h4>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
              >
                <button className="btn btn-primary">Compra aquí</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  // render termina aquí

  // se ejecuta cuando le da +

  handleIncrement = (product, maxValue) => {
    /*   console.log("handleIncrement", product);
    product.quantiy = product.quantiy + 1; 
    
    obtener el index de los productos*/
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    // console.log(allProducts[index]);
    if (allProducts[index].quality < maxValue) {
      allProducts[index].quantity++;
      // actualiza el estado del componente actual

      this.setState({ products: allProducts });
    }
  };

  // se ejecuta cuando le da -

  handleDecrement = (product, minValue) => {
    /*   console.log("handleIncrement", product);
    product.quantiy = product.quantiy + 1; 
    
    obtener el index de los productos*/
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    // console.log(allProducts[index]); console.log("handleDecrement", product);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      // actualiza el estado del componente actual

      this.setState({ products: allProducts });
    }
  };

  // se ejecuta cuando usuario le da en X al componente Producto
}
