import React, { useState } from 'react';

import { FaHeart, FaSearch, FaMoon, FaSun } from 'react-icons/fa';

import SideBar from '../SideBar/SideBar';

import * as S from './style';

export const MainNavigation = ({ theme, themeToggler }) => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  const icon = theme === 'light' ? <S.MoonIcon /> : <S.SunIcon />;

  return (
    <>
      <S.Nav>
        <SideBar isOpen={isOpen} toggle={toggle} />
        <S.NavBarHeader>My Favorite Images</S.NavBarHeader>
        <S.Toggle onClick={() => themeToggler()}>{icon}</S.Toggle>
        <S.Bars onClick={toggle} />
        <S.NavMenu>
          <S.NavLink
            exact
            to="/"
            activeStyle={{ fontWeight: 'bold', color: '#8f71ff' }}
          >
            <FaHeart />
            Favorites
          </S.NavLink>
          <S.NavLink
            to="/search"
            activeStyle={{ fontWeight: 'bold', color: '#8f71ff' }}
          >
            <FaSearch />
            Serach
          </S.NavLink>
        </S.NavMenu>
      </S.Nav>
    </>
  );
};

export default MainNavigation;
