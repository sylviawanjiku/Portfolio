import React from 'react';
import Home from "./views/Home"
import { HashRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
