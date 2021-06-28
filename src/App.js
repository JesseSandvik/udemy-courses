import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import NoMatch from './utils/NoMatch';


function App() {
  const [ backgroundOpen, setBackgroundOpen ] = useState(false);

  const backgroundToggle = () => {
    if (!backgroundOpen) {
      setBackgroundOpen(true);
    } else {
      setBackgroundOpen(false);
    }
  }
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home backgroundOpen={backgroundOpen} backgroundToggle={backgroundToggle} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <NoMatch />
        </Route>
    </Switch>
  </>
  );
}

export default App;
