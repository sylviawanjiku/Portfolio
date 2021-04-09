import React from 'react';
import Home from "./views/Home";
import ProjectCards from "./components/Projects";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import { HashRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact={true} path="/about" component={Skills} />
            <Route exact={true} path="/contact" component={ContactMe} />
            <Route exact={true} path="/work" component={ProjectCards} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
