import React, { Component } from "react";

export default class CustomersList extends Component {
  state = {
    pageTitle: "Clientes",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Lucero",
        phone: "123-456",
        address: { city: "Guadalajara" },
        photo: "https://picsum.photos/id/1019/60",
      },
      {
        id: 2,
        name: "Carlos",
        phone: "231-456",
        address: { city: "Guadalajara" },
        photo: "https://picsum.photos/id/1018/60",
      },
      {
        id: 3,
        name: "Julio",
        phone: "321-456",
        address: { city: "CDMX" },
        photo: "https://picsum.photos/id/1072/60",
      },
      {
        id: 4,
        name: "Jorge",
        phone: null,
        address: { city: "Guadalajara" },
        photo: "https://picsum.photos/id/1016/60",
      },
      {
        id: 5,
        name: "Diego",
        phone: null,
        address: { city: "CDMX" },
        photo: "https://picsum.photos/id/1020/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
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
              <th>Photo</th>
              <th>Nombre cliente</th>
              <th>Teléfono</th>
              <th>Ciudad</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  //Se ejecuta cuando el usuario le da click a Refresh
  onRefreshClick = () => {
    //actualiza el estado usando setState para que react actualice el navegador DOM en automático
    this.setState({
      customersCount: 7,
    });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">Sin Tel</div>;
    }
  };
  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Cambiar imagen
              </button>
            </div>
          </td>
          <td>{cust.name}</td>

          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };

  //se ejecuta cuando usuario le da click
  //recibe el objeto "cliente" e indexea el cliente clickeado
  onChangePictureClick = (cust, index) => {
    // console.log(cust);
    // console.log(index);

    // obtener clientes existentes
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/1072/60";
    // actualizar clientes en el array
    this.setState({ customers: custArr });
  };
}
