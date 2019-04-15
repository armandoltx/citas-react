import React, { Component } from 'react';
import Header from './Header';
import AgregarCita from './AgregarCita';
import ListaCitas from './ListaCitas';

class App extends Component {

  // crear el state
  state = {
    citas:[],
  }

  // este componente se ejecuta una vez que el componente se carge
  componentDidMount() {
    const citasLS = localStorage.getItem('citas'); // se le pasa como parametro la key, que se ve cual es en el chrome tools en application
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS) // como viene convertido en un string con JSON.parse lo convertimos a un objeto
      });

    }
  }

  // se ejecuta cuando algo cambia en el componente
  componentDidUpdate() {
    localStorage.setItem( // localStorage solo guarda strings por eso lo de JSON.stringfy
      'citas',
      JSON.stringify(this.state.citas)
    )
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

  // borrar cita

  borrarCita = (id) => {
    console.log("id ", id);
    //Obetener copia del  el state
    const citasActuales = [...this.state.citas];
    console.log("ANtes....");
    console.log(citasActuales);

    // borrar el elemento del state
    const citas = citasActuales.filter(cita => cita.id !==id)
    console.log("Despues....");
    console.log(citas);

    // actualizar el state
    this.setState({
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
            <ListaCitas
              citas={this.state.citas}
              borrarCita={this.borrarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
