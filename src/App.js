import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';

import NoMatch from './utils/NoMatch';


function App() {
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);
  const [ openBackground, setOpenBackground ] = useState(false);

  const menuToggleHandler = () => {
    if (!menuIsOpen) {
      setMenuIsOpen(true);
    } else {
      setMenuIsOpen(false);
    }
  }

  const backgroundToggleHandler = () => {
    if (!openBackground) {
      setOpenBackground(true);
    } else {
      setOpenBackground(false);
    }
  }


  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home menuIsOpen={menuIsOpen}
                menuToggleHandler={menuToggleHandler}
                openBackground={openBackground}
                backgroundToggle={backgroundToggleHandler}
                />
        </Route>
        <Route path="/about">
          <About menuIsOpen={menuIsOpen}
                menuToggleHandler={menuToggleHandler}/>
        </Route>
        <Route path="/contact">
          <Contact menuIsOpen={menuIsOpen}
                menuToggleHandler={menuToggleHandler}/>
        </Route>
        <Route>
          <NoMatch />
        </Route>
    </Switch>
  </>
  );
}

export default App;
