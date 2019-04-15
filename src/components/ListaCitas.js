import React, {Component} from 'react';
import Cita from './Cita';


class ListaCitas extends Component {
  render () {
    const citas =this.props.citas;
    //console.log(Object.keys(citas).length);
    const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra tus citas aqui.';

    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 card-title className="text-center card-title">{mensaje}</h2>
          <div className="lista-citas">
            {Object.keys(this.props.citas).map((cita) => (
              //console.log("key ", key),
              //console.log(citas[key])
              <Cita
                key={cita}
                info={this.props.citas[cita]} 
              />
            ) ) }
          </div>
        </div>
      </div>
    );
  }
}

export default ListaCitas;