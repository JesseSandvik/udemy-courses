import "./App.scss";
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './footer/Footer';
import Home from './home/Home';
import Header from './header/Header';
import About from './about/About';
import Contact from './contact/Contact';
import NoMatch from './utlis/NoMatch';


function App() {


  return (
    <>
    <Header />
      <Switch>
        <Route exact path="/">
          <Home />
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
    <Footer />
  </>
  );
}

export default App;
