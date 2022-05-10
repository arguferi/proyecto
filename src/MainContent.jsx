import React, { Component } from "react";

export default class MainContent extends Component {
  state = { pageTitle: "Customers", customersCount: 5 };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}

          <span className="badge bg-primary m-2">
            {this.state.customersCount}
          </span>

          <button
            className="btn btn-info m-2 p-2"
            onClick={this.onRefreshClick}
          >
            Refresh
          </button>
        </h4>
      </div>
    );
  }

  //Se ejecuta cuando el usuario le da click a Refresh
  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };
}
