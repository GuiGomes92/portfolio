import React from 'react'
import LandingPage from './LandingPage'
import About from './About'
import Work from './Work'
import Contact from './Contact'
import NotFound from './NotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route exact path="/work" render={() => <Work />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact render={() => <NotFound />} />
      </Switch>
    </Router>
  );
}

export default App;
