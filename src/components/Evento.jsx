import React from 'react';



const Evento = ({evento}) => {


    return (
        <div>
        <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
                {evento.logo ? <img src={evento.logo.url} alt={evento.name.text}/> : null}
            </div>
            <div className="uk-card-body">
                <h3 className="uk-card-title">
                    {evento.name.text}

                </h3>
                {evento.summary}
                
            </div>
            <div className="uk-card-footer">
                <a target="_blank" rel="noopener noreferrer"  href={evento.url} className="uk-button uk-button-secondary">Mas Informacion</a>
            </div>
        </div>
        </div>
    );
};

export default Evento;