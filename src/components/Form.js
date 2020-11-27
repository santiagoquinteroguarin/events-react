import React, { Fragment, useState } from 'react';

const Form = (props) => {

    // create state of events
    const [event, setUpgradeEvent] = useState({
        name: '',
        attendant: '',
        date: '',
        hour: '',
        note: '',
    });

    const handleChange = (e) => {
        setUpgradeEvent({
            ...event,
            [e.target.name]:[e.target.value]
        })
    }

    const { name, attendant, date, hour, note } = event;
    
    return (
        <Fragment>
            <h2>Crear Evento</h2>

            <form>
                <label>Nombre del evento</label>
                <input 
                    type="text"
                    name="name"
                    className="u-full-width"
                    placeholder="Evento"
                    onChange="handleChange"
                    value="name"
                />

                <label>Nombre del participante</label>
                <input 
                    type="text"
                    name="attendant"
                    className="u-full-width"
                    placeholder="Nombre participante al evento"
                    onChange="handleChange"
                    value="attendant"
                />

                <label>Fecha del evento</label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange="handleChange"
                    value="date"
                />

                <label>Hora del evento</label>
                <input 
                    type="time"
                    name="hour"
                    className="u-full-width"
                    onChange="handleChange"
                    value="hour"
                />

                <label>Nota</label>
                <textarea
                    className="u-full-width"
                    name="note"
                    onChange="handleChange"
                    value="note"
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