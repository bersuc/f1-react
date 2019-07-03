import React from 'react';
import './css/global.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Pilotos from './components/Pilotos';
import Tabela from './components/Tabela';
import DriverDetail from './components/DriverDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tabela" exact component={Tabela} />
        <Route path="/pilotos" exact component={Pilotos} />
        <Route path="/pilotos/:id" exact component={DriverDetail} />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
