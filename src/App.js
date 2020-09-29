import React from 'react';
import './App.scss';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import Leading from "./components/leading/leading";
import Bottons from "./components/buttons/buttons";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reducer from './reducer'


const initialState = {
  characterList: [],
  characterFiltered: [],
  characterFilteredOrigin: [],
  characterInfo: []
}

const store = createStore(reducer ,initialState)

function App() {
  M.AutoInit();
  return (
    <Provider store={store}>
      <Router>
        <div className="header-background"></div>
        <Bottons/>
        <Switch>
          <Route exact path="/" component={Leading} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
