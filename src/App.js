import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { GlobalStyle, darkTheme } from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { FavoritesProvider } from './context/favorites';

import { MainNavigation as Navbar } from './components/navigation';
// import { SideBar } from './components/navigation';
import { Home, Search } from './pages';

import './App.css';

function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <FavoritesProvider>
          {/* <SideBar /> */}
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Redirect to="/" />
          </Switch>
        </FavoritesProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
