import React from 'react';
import './styling/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import Lobby from './pages/lobby';

function App() {

  return (
    <div className="App">
      <Lobby />
      {<BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={IndexPage} />
          <Route exact path="/:roomId" component={Lobby} />
          <Route path={'/'} component={IndexPage} />
        </Switch>
      </BrowserRouter>}
    </div>
  );
}

export default App;
