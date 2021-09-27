import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { GlobalStyle, darkTheme } from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';

import { MainNavigation as Navbar } from './components/navigation';
import { SideBar } from './components/navigation';
import { Home, Favorites } from './pages';

import './App.css';

function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        {/* <SideBar /> */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
          <Redirect to="/" />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
