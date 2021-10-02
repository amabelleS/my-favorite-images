import styled from 'styled-components';
import { FaSearch, FaBackward } from 'react-icons/fa';

export const SearchPage = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  padding: 3rem 0 1rem;

  @media screen and (max-width: 820px) {
    width: 90%;
    justify-content: space-evenly;
  }
  @media screen and (max-width: 640px) {
    display: block;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  background: transparent;
  position: relative;
  border: none;
  height: 2rem;
  width: 20rem;
  font-size: 1.1rem;
  &:focus {
    outline-style: none;
    outline-color: bisque;
  }
  @media screen and (max-width: 678px) {
    width: 80vw;
  }
`;

export const Button = styled.button`
  border: none;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
    background: rgba(63, 191, 191, 0.5);
  }
`;

export const SearchIcon = styled(FaSearch)`
  color: ${(props) => props.theme.body};
  &:hover {
    cursor: pointer;
  }
`;
export const BackIcon = styled(FaBackward)`
  color: ${(props) => props.theme.text};
  font-size: 2rem;
  &:hover {
    // animate
    cursor: pointer;
  }
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  &:after {
    content: 'Search for your favorite images';
    position: absolute;
    transition: transform 0.15s linear, font-size 0.25s linear;
    top: 50%;
    z-index: 100;
    letter-spacing: 1px;
    color: ${(props) => props.theme.navActive};
    font-weight: normal;
    left: 5%;
    font-size: ${({ focused }) => (focused ? '14px' : '16px')};
    transform: ${({ focused }) =>
      focused ? 'translateY(-50px) translateX(5%);' : 'translateY(-50%);'};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
`;

// PAGINATION ---------------------
export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;

  @media screen and (min-width: 775px) {
    margin: 0 auto;
    max-width: 700px;
  }
`;

export const PaginateBtn = styled.div`
  background: transparent;
  border-color: transparent;
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  margin: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
`;

export const PageBtn = styled.div`
  width: 1rem;
  height: 1rem;
  background: ${(props) => props.theme.body};
  border-radius: 5px;
  cursor: pointer;
  margin: 0.5rem;
  transition: all 0.3s linear;

  &.active-btn {
    color: ${(props) => props.theme.navActive};
  }
`;
