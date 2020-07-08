import React from 'react';
import { Route, Link, Switch  } from 'react-router-dom';

import HomePage from './components/HomePage';
import CatApp from './components/catsApp/CatApp';
import YoutubeApp from './components/PlayerApp/YoutubeApp';
import WeatherApp from './components/WeatherApp/WeatherApp';
import TechPage from './components/Tech/Page';
import ItemPage from './components/Tech/ItemPage';
import FavouritesPage from './components/Tech/FavouritesPage';
import MemsApp from './components/Mems/MemsApp';

import './App.css';

function App() {
  return (
    <div>
      
      <ul> 

        <li><Link to="/" style={{ textDecoration: 'none' }}>Главная страница </Link></li>
        <li><Link to="/mems" style={{ textDecoration: 'none' }}>Генератор мемов</Link></li>
        <li><Link to="/tech" style={{ textDecoration: 'none' }}>Техника</Link></li>
        <li><Link to="/cats" style={{ textDecoration: 'none' }}>Приложение с котиками</Link></li>
        <li><Link to="/youtube" style={{ textDecoration: 'none' }}>YouTube </Link></li>
        <li><Link to="/weather" style={{ textDecoration: 'none' }}>Погода</Link></li>
      </ul>
      
      <hr />
      <Route path="/" exact component={HomePage} />
      <Switch>
      <Route path="/tech/favourites" component={FavouritesPage} />  
      <Route path="/tech/:id" component={ItemPage} />  
      <Route path="/tech" component={TechPage} />
      </Switch>
      <Route path="/mems"  component={MemsApp} />
      <Route path="/cats"  component={CatApp} />
      <Route path="/youtube" component={YoutubeApp} />
      <Route path="/weather" component={WeatherApp} />
    </div>
  );
}

export default App;
