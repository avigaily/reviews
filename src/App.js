import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/global.scss';
import Nav from './cmps/Nav';
import ReviewList from './pages/ReviewList';
import ReviewDetails from './pages/ReviewDetails';


function App() {
  return (
    <div className="app flex column">
      <header>
        <h1>אסטרטגיה</h1>
      </header>
      <Nav />
      <main className="grid-container">
        <Switch>
          <Route path="/:id" component={ReviewDetails} />
          <Route path="/" component={ReviewList} exact />
        </Switch>
      </main>
    </div>
  );
}

export default App;
