import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import  Location from './component/location';
import store from '../src/store';
import './App.css';


const App = () => (
  <Provider store={store}>
  <Router>
    <Switch>
      <Route exact path='/' component={Location}/>
    </Switch>
  </Router>
  </Provider>
)

export default App;
