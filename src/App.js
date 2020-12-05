import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Event from './components/Event';
import Particles from './components/Particles';

function App() {

  // ?15. si no hay eventos, igual a []
  let eventsInit = JSON.parse(localStorage.getItem('events'));
  if(!eventsInit) {
    eventsInit = [];
  }

  // ?8. state for events
  const [events, setSavedEvents] = useState(eventsInit);

  // ?14. Use effect para realizar ciertas operaciones cuando el state cambia
  // para que se ejecute una vez, pasar un []
  useEffect(() => {
    let eventsInit = JSON.parse(localStorage.getItem('events'));
    
    // ?16.
      if(eventsInit) {
        localStorage.setItem('events',JSON.stringify(events));
      } else {
        // sino hay nada
        localStorage.setItem('events',JSON.stringify([]));
      }
  },[events]);

  // ?8. funcion que toma los eventos actuales y agrega la nueva
  const createEvent = event => {
    // ?9. saved events
    setSavedEvents([
      ...events,
      event
    ]);
  }

  // ?12. funcion que elimina un evento por su id
  const deleteEvent = id => {
    const newEvents = events.filter(event => event.id !== id);
    setSavedEvents(newEvents);
  }

  // ?13.validation message
  const title = events.length === 0 ? 'No hay eventos' : 'Administra tus eventos' ;

  return (
    <Fragment>
        <Particles/>
        <h1>Administrador De Eventos 📬</h1>

        <div className="container">
          <div className="row">
            <div className="one-half column item">
              <Form 
                // ?8.
                createEvent={createEvent}
              />
            </div>
            <div className="one-half column item">
              <h2>{title}</h2>
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
