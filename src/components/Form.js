import React, { Fragment } from 'react';

const Form = (props) => {

    const {  } = props;
    return (
        <Fragment>
            <h2>Crear Evento</h2>

            <form>
                <label>Nombre del evento</label>
                <input 
                    type="text"
                    name="event"
                    className="u-full-width"
                    placeholder="Evento"
                />

                <label>Nombre del participante</label>
                <input 
                    type="text"
                    name="attendant"
                    className="u-full-width"
                    placeholder="Nombre participante al evento"
                />

                <label>Fecha del evento</label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                />

                <label>Hora del evento</label>
                <input 
                    type="time"
                    name="hour"
                    className="u-full-width"
                />

                <label>Nota</label>
                <textarea
                    className="u-full-width"
                    name="note"
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Evento</button>
            </form>
        </Fragment>
    );
}

export default Form;