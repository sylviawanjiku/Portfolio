import React from 'react';
import Home from "./components/containers/Home"
import About from "./components/About";
import Signup from "./components/Signup";
import { HashRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/register" component={Signup} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
