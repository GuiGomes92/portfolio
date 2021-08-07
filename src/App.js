import React from 'react'
import LandingPage from './LandingPage'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import DesignWork from './DesignWork'
import DevWork from './DevWork'
import Job from './Job'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/work/:area" render={() => <DesignWork />} />
        <Route exact path="/work/:area/:job" render={() => <Job />} />
        <Route exact render={() => <NotFound />} />
      </Switch>
    </Router>
  );
}

export default App;
