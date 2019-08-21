import React, { Component } from 'react';
import axios from 'axios';

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;


class EventosProvider extends Component {
    
    token = 'VRJKFA3TZDVZIEVZYEX5';

    state = {
        eventos:[]
    } 

    obtenerEventos = async (busqueda) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=best&token=${this.token}&locale=es_ES`;
        
        const eventos = await axios(url);
        
        
        this.setState({
            eventos: eventos.data.events
        })
       

    }
    
    render() {
        return (
            <EventosContext.Provider
                value={{
                    eventos: this.state.eventos,
                    obtenerEventos: this.obtenerEventos
                }}
            >
                {this.props.children}
            </EventosContext.Provider>
        );
    }
}

export default EventosProvider;