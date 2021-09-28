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

  &.active {
    color: ${(props) => props.theme.navActive};
    /* border-bottom: 3px solid ${(props) => props.theme.secondary}; */
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  /* background: ${(props) => props.theme.text}; */
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

// export const NavBtn = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: -24px;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavBtnLink = styled(Link)`
//   border-radius: 4px;
//   background: ${(props) => props.theme.body};
//   padding: 10px 22px;
//   color: ${(props) => props.theme.text};
//   border: none;
//   outline: none;
//   cursor: pointer;
//   transition: all 0.2 ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2 ease-in-out;
//     background: ${(props) => props.theme.body};
//     color: ${(props) => props.theme.primary};
//   }
// `;

//----------------------------------------------------------
// export const MainNavigation = styled.nav`
//   background: ${(props) => props.theme.text};
//   color: ${(props) => props.theme.body};
//   flex-basis: 60px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem;
// `;

// export const NavHeader = styled.div`
//   font-weight: bold;
//   font-size: 1.3rem;
// `;

// export const NavToggle = styled.div`
//   font-size: 1.5rem;
//   color: var(--clr-primary-5);
//   background: transparent;
//   border-color: transparent;
//   transition: var(--transition);
//   cursor: pointer;

//   &:hover {
//     color: var(--clr-primary-1);
//     transform: rotate(90deg);
//   }

//   @media screen and (min-width: 800px) {
//     display: none;
//   }
// `;

// export const NavLinks = styled.div`
//   display: none;

//   @media screen and (min-width: 800px) {
//     display: flex;
//   }
// `;
