import React, { Component} from 'react';
import Header from './components/Header'
import FormularioAtr from './components/FormularioAtr'

import CategoriaPovider from './context/CategoriaContext'

class App extends Component {
  state = {

  }
  render() {
    return (
      <CategoriaPovider>
        <Header/>
        
        <div className="uk-container">
          <FormularioAtr/>
        </div>
      </CategoriaPovider>
    );
  }
}

export default App;