import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Event from './components/Event';

function App() {

  let eventsInit = JSON.parse(localStorage.getItem('events'));
  if(!eventsInit) {
    eventsInit = [];
  }

  const [events, setSavedEvents] = useState([]);

  // Use effect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    let eventsInit = JSON.parse(localStorage.getItem('events'));
    
      if(eventsInit) {
        localStorage.setItem('events',JSON.stringify(events));
      } else {
        localStorage.setItem('events',JSON.stringify([]));
      }
  },[events]);

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

  // validation message
  const title = events.length === 0 ? 'No hay eventos' : 'Administra tus eventos' ;

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
