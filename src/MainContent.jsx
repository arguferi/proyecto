import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Clientes",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Lucero",
        phone: "123-456",
        address: { city: "Guadalajara" },
      },
      {
        id: 2,
        name: "Carlos",
        phone: "231-456",
        address: { city: "Guadalajara" },
      },
      { id: 3, name: "Julio", phone: "321-456", address: { city: "CDMX" } },
      {
        id: 4,
        name: "Jorge",
        phone: "123-564",
        address: { city: "Guadalajara" },
      },
      { id: 5, name: "Diego", phone: "123-645", address: { city: "CDMX" } },
    ],
  };

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
            Actualizar
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre cliente</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cust) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td>{cust.phone}</td>
                  <td>{cust.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
