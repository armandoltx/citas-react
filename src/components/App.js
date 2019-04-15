import React, { Component } from 'react';
import Header from './Header';
import AgregarCita from './AgregarCita';
import ListaCitas from './ListaCitas';

class App extends Component {

  // crear el state
  state = {
    citas:[],
  }


  // Agregar la Cita al State
  agregarCita = (nuevaCita) => {
    console.log("Dentro de App ", nuevaCita);

    //Hacer una copia del state actual
    const citas = [...this.state.citas, nuevaCita]
    console.log("cambiando el state ", citas);
    // ponerlo en el state
    this.setState ({
      citas: citas,
    });

  }


  render() {
    return (
      <div className="container">
        <Header titulo={"Administrador de Pacientes de Veterinaria"} />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita agregarCita={this.agregarCita} />
          </div>
          <div className="col-md-6">
            <ListaCitas citas={this.state.citas} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
