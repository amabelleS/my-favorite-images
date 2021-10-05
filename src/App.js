import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { GlobalStyle, darkTheme, lightTheme } from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { FavoritesProvider } from './context/favorites';

import { MainNavigation as Navbar } from './components/navigation';
// import { SideBar } from './components/navigation';
import { Home, Search } from './pages';

import './App.css';

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <FavoritesProvider>
          {/* <SideBar /> */}
          <Navbar theme={theme} themeToggler={themeToggler} />
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
