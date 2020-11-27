import React, { Fragment, useState } from 'react';
import Form from '../components/Form';

function App() {

  const [events, setSavedEvents] = useState([]);

  // funcion que toma los eventos actuales y agrega la nueva
  const createEvent = event => {
    setSavedEvents([
      ...events,
      event
    ]);
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

            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
