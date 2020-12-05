import React, { Fragment, useState } from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';

const Form = (props) => {

    //?8. 
    const { createEvent } = props;

    // 2. create state of events - local state
    const [event, setUpgradeEvent] = useState({
        name: '',
        attendant: '',
        date: '',
        hour: '',
        note: '',
    });

    // 7. state for error - boolean
    const [error, setUpgradeError] = useState(false);

    // 3. event for modify the state
    const handleChange = (e) => {
        // 4. modify state --- (Error in react event.name = e.target.value)
        setUpgradeEvent({
            ...event,
            [e.target.name] : e.target.value
        })
    }

    // 5. extract
    const { name, attendant, date, hour, note } = event;
    
    const submitEvent = (e) => {
        // no send method get or query string
        e.preventDefault();

        // 6. validation
        if(name.trim() === '' || attendant.trim() === '' || date.trim() === '' || hour.trim() === '' || note.trim() === '') {
            setUpgradeError(true);
            // return para que cuando haya un error, no se siga ejecutando el codigo
            return;
        }

        // delete prevent message
        setUpgradeError(false);

        // 7. generate - assign an ID
        event.id = uuid();

        // ?8. Create the event
        createEvent(event);

        // ?10. reset form
        setUpgradeEvent({
            name: '',
            attendant: '',
            date: '',
            hour: '',
            note: '',
        });
    }

    return (
        <Fragment>
            <h2>Crear Evento</h2>

            {error ? <p className="alert-error">los campos son obligatorios 🤨</p> : null}

            {/* 1. create form */}
            <form onSubmit={submitEvent}>
                <label>Nombre del evento</label>
                <input 
                    type="text"
                    name="name"
                    className="u-full-width"
                    placeholder="Evento"
                    // 3. cta
                    onChange={handleChange}
                    // 5. reset
                    value={name}
                />

                <label>Nombre del participante</label>
                <input 
                    type="text"
                    name="attendant"
                    className="u-full-width"
                    placeholder="Nombre participante al evento"
                    onChange={handleChange}
                    value={attendant}
                />

                <label>Fecha del evento</label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />

                <label>Hora del evento</label>
                <input 
                    type="time"
                    name="hour"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hour}
                />

                <label>Nota</label>
                <textarea
                    className="u-full-width"
                    name="note"
                    placeholder="nota"
                    onChange={handleChange}
                    value={note}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary btn-submit"
                >Agregar Evento</button>
            </form>
        </Fragment>
    );
}

Form.propTypes = {
    createEvent: PropTypes.func.isRequired
}

export default Form;