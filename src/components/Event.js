import React from 'react';
import PropTypes from 'prop-types';

const Event = (props) => {

    const { event, deleteEvent } = props;
    const { name, attendant, date,hour, note } = event;

    return (
        <div className="event">
            <p>Evento: <span>{name}</span></p>
            <p>Participante: <span>{attendant}</span></p>
            <p>Fecha: <span>{date}</span></p>
            <p>Hora: <span>{hour}</span></p>
            <p>Notas: <span>{note}</span></p>

            <button
                className="button delete u-full-width"
                onClick={() => deleteEvent(event.id)}
            >Eliminar &times;</button>
        </div>
    );
}

Event.propTypes = {
    event: PropTypes.object.isRequired,
    deleteEvent: PropTypes.func.isRequired
}

export default Event;