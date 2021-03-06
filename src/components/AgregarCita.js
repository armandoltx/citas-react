import React, { Component } from 'react';
import uuid from 'uuid'; // Para generar un id unico
import PropTypes from 'prop-types';

class AgregarCita extends Component {

  // refs para los campos del formulario
  nombreMascotaRef = React.createRef();
  propietarioRef = React.createRef();
  fechaRef = React.createRef();
  horaRef = React.createRef();
  sintomasRef = React.createRef();

  state = {
    error: false,
  }

  //crear onSubmit funcion para el formulario
  crearNuevaCita = (e) => {
    // 1. Prevenir default para q no se recargue
      e.preventDefault();
      console.log("Dentro de crearNuevaCita");
      console.log("nombreMascotaRef ", this.nombreMascotaRef.current.value);
      console.log("propietarioRef ", this.propietarioRef.current.value);
      console.log("fechaRef ", this.fechaRef.current.value);
      console.log("horaRef ", this.horaRef.current.value);
      console.log("sintomasRef ", this.sintomasRef.current.value);


    // 2. Crear el Objeto con los datos
      // se puede hacer asi
      // const nuevaCita = {
      //   mascota: this.nombreMascotaRef.current.value,
      //   propietario: this.propietarioRef.current.value,
      //   fecha: this.fechaRef.current.value,
      //   hora: this.horaRef.current.value,
      //   sintomas: this.sintomasRef.current.value,
      //   id: uuid(),
      // }
      // se puede hacer asi tb:
        const mascota = this.nombreMascotaRef.current.value,
          propietario = this.propietarioRef.current.value,
          fecha = this.fechaRef.current.value,
          hora = this.horaRef.current.value,
          sintomas = this.sintomasRef.current.value,
          id = uuid();

    if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
      this.setState ({
        error: true,
      });
    } else {
      const nuevaCita = { // usando destructuring
        mascota,
        propietario,
        fecha,
        hora,
        sintomas,
        id: uuid(),
      }

      // 3. Agregarlo y enviarlo por props hacia el padre para actualizar el state
      this.props.agregarCita(nuevaCita);

      // 4. Resetear el formulario
      e.currentTarget.reset();

      // 5. Elimine el error
      this.setState ({
        error: false,
      });

    }
  }

  render() {
    const existeError = this.state.error;
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Agrega las Citas aqui</h2>
          <form onSubmit={this.crearNuevaCita}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
              <div className="col-sm-8 col-lg-10">
                <input ref={this.nombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
              <div className="col-sm-8 col-lg-10">
                <input ref={this.propietarioRef} type="text" className="form-control" placeholder="Nombre Dueño de la Mascota" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                <input ref={this.fechaRef} type="date" className="form-control" />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input ref={this.horaRef} type="time" className="form-control" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
              <div className="col-sm-8 col-lg-10">
                <textarea ref={this.sintomasRef} className="form-control"></textarea>
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div className="col-sm-3">
                <button type="submit" className="btn btn-success w-100">Agregar</button>
              </div>
            </div>
          </form>
          {existeError ? <div className="alert alert-danger text-center">Todos los Campos son obligatorios</div> : ""}
        </div>
      </div>
    );
  }
}

AgregarCita.propTypes = {
  agregarCita: PropTypes.func.isRequired,
}

export default AgregarCita;