import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw-1000px) / 2);
  z-index: 10;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const NavBarHeader = styled.div`
  padding-left: 1rem;
`;

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.body};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: ${(props) => props.theme.body};

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
