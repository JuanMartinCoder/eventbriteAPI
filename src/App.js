import React, { Component} from 'react';
import Header from './components/Header'
import FormularioAtr from './components/FormularioAtr'
import ListaEventos from './components/ListaEventos'

import CategoriaPovider from './context/CategoriaContext'
import EventosProvider from './context/EventoContext'

class App extends Component {
  state = {

  }
  render() {
    return (

      <EventosProvider>
        <CategoriaPovider>
          <Header/>
          
          <div className="uk-container">
            <FormularioAtr/>

            <ListaEventos/>
          </div>
        </CategoriaPovider>
      </EventosProvider>
    );
  }
}

export default App;