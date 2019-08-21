import React, { Component } from 'react';

import {CategoriaConsumer} from '../context/CategoriaContext';
import {EventosConsumer} from '../context/EventoContext';

class FormularioAtr extends Component {
    state ={
        nombre: '',
        categoria : ''
    }

    obtenerDatosEventos = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }



    render() {
        return (
            <EventosConsumer>
                {(value) => {
                    
                    return(

                    <form onSubmit={(e)=>{

                        e.preventDefault();
                        value.obtenerEventos(this.state);

                        }}>
                        <fieldset className="uk-fieldset uk-margin">
                            <legend className="uk-legend uk-text-center">
                                Busca tu evento por nombre o por categoria
                            </legend>
                        </fieldset>

                        <div className="uk-column-1-3@m uk-margin">
                            <div className="uk-margin" uk-margin="true">
                                <input name="nombre" 
                                    className="uk-input" 
                                    type="text" 
                                    placeholder="Nombre de evento o ciudad"
                                    onChange={this.obtenerDatosEventos}
                                    />
                            </div>
                            <div className="uk-margin" uk-margin="true">
                                <select name="categoria" className="uk-select" onChange={this.obtenerDatosEventos}>
                                    <option value="">-- Seleccione Categoria --</option>
                                    <CategoriaConsumer>
                                        {(value) => {
                                        return (value.categoria.map(categoria => (
                                            <option value={categoria.id} data-uk-form-select key={categoria.id}>
                                                {categoria.name_localized}
                                            </option>)
                                        ))
                                            
                                        }}
                                    </CategoriaConsumer>

                                </select>
                            </div>

                            <div>
                                <input type="submit" value="Buscar Eventos" className="uk-button uk-button-danger"/>
                            </div>
                        </div>
                    </form>
            );
        }}
            </EventosConsumer>
        );
    }
}

export default FormularioAtr;