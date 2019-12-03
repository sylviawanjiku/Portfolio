import React from 'react';
import Home from "./views/Home"
import { Provider } from "react-redux";
import store from "./redux/store";
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import { HashRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact={true} path="/about" component={Skills} />
          <Route exact={true} path="/work" component={Projects} />
          <Route exact={true} path="/contact" component={Contact} />
        </Switch>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
