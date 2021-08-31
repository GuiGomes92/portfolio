import React, { useEffect, useState } from 'react'
import LandingPage from './LandingPage'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import DesignWork from './DesignWork'
import Job from './Job'
import ScrollToTop from './scrollToTop'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll());
  });

  function handleScroll() {
    setPosition(window.pageYOffset)
  }

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" render={() => <LandingPage position={position} />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/about" render={() => <About position={position} />} />
        <Route exact path="/work/:area" render={() => <DesignWork position={position} />} />
        <Route exact path="/work/:area/:job" render={() => <Job position={position} />} />
        <Route exact render={() => <NotFound />} position={position} />
      </Switch>
    </Router>
  );
}

export default App;
