import React from 'react';

import * as S from './style';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <S.SideBarContainer isOpen={isOpen} onClick={toggle}>
      <S.Icon onClick={toggle}>
        <S.CloseIcon />
      </S.Icon>
      <S.SideBarWrapper>
        <S.SideBArMenu>
          <S.SideBarNavLink to="/">Favorites</S.SideBarNavLink>
          <S.SideBarNavLink to="/search">search</S.SideBarNavLink>
        </S.SideBArMenu>
      </S.SideBarWrapper>
    </S.SideBarContainer>
  );
};

export default SideBar;
