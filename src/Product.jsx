import React, { Component } from "react";

export default class Product extends Component {
  state = {
    product: this.props.product,
  };
  render() {
    console.log(this.props);
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div classname="card body">
            <div className="text-muted"># {this.state.product.id}</div>

            <h5 className="pt-5 border-top">
              {this.state.product.productName}
            </h5>
            <div>${this.state.product.price}</div>
          </div>
          {/* las tarjetas terminan aquí */}
          <div className="card-footer">
            <div className="float-left">
              <span className="badge">{this.state.product.quantity}</span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-succes"
                  onClick={() => {
                    this.props.onDecrement(this.state.product);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            {/* float left termina aquí */}

            <div className="float-right">{this.props.children}</div>
          </div>
          {/* las card-footer terminan aquí */}
        </div>
      </div>
    );
  }
}
