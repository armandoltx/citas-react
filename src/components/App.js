import React, { Component } from 'react';
import Header from './Header';
import AgregarCita from './AgregarCita';

class App extends Component {


  // Agregar la Cita al State
  agregarCita = () => {
    console.log("Dentro de App");

    //Hacer una copia del state actual
    // Agregar la cita al objeto del state
    // ponerlo en el state

  }


  render() {
    return (
      <div className="container">
        <Header titulo={"Administrador de Pacientes de Veterinaria"} />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita agregarCita={this.agregarCita} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
