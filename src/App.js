import React, { Fragment, useState } from 'react';
import Form from '../components/Form';
import Event from '../components/Event';

function App() {

  const [events, setSavedEvents] = useState([]);

  // funcion que toma los eventos actuales y agrega la nueva
  const createEvent = event => {
    setSavedEvents([
      ...events,
      event
    ]);
  }

  // funcion que elimina un evento por su id
  const deleteEvent = id => {
    const newEvents = events.filter(event => event.id !== id);
    setSavedEvents(newEvents);
  }

  return (
    <Fragment>
        <h1>Administrador De Eventos</h1>

        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Form 
                createEvent={createEvent}
              />
            </div>
            <div className="one-half column">
              <h2>Administra tus eventos</h2>
              {events.map(event => (
                <Event 
                  key={event.id}
                  event={event}
                  deleteEvent={deleteEvent}
                />
              ))}
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
