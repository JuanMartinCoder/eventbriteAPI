import React, { Component } from 'react';

class FormularioAtr extends Component {
    state ={
        nombre: '',
        categoria : ''
    }
    render() {
        return (
            <form>
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Busca tu evento por nombre o por categoria
                    </legend>
                </fieldset>

                <div className="uk-column-1-3@m uk-margin">
                    <div className="uk-margin" uk-margin="true">
                        <input name="nombre" className="uk-input" type="text" placeholder="Nombre de evento o ciudad"/>
                    </div>
                    <div className="uk-margin" uk-margin="true">
                        <select name="categoria" className="uk-select"></select>
                    </div>

                    <div>
                        <input type="submit" value="Buscar Eventos" className="uk-button uk-button-danger"/>
                    </div>
                </div>
            </form>
        );
    }
}

export default FormularioAtr;