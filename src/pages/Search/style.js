import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SearchPage = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  /* color: ${(props) => props.theme.text}; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-block-start: 100px;
`;

export const Input = styled.input`
  background: transparent;
  position: relative;
  border: none;
  height: 30px;
  width: 320px;
  z-index: 200;
  padding: 10px;
  font-size: 20px;
  font-weight: lighter;
  &:focus {
    outline-style: none;
    outline-color: bisque;
  }
`;

// DELETE!!
export const SampleInput = styled.input.attrs((props) => ({
  // we can define static props
  type: 'text',

  // or we can define dynamic ones
  size: props.size || '1em',
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  color: ${(props) => props.theme.text};
  padding: 0.5rem;

  &:hover {
    /* font-size: 2rem; */
    color: tomato;
    cursor: pointer;
    background: rgba(63, 191, 191, 0.5);
  }
`;

export const ButtonOut = styled.button`
  border: 1px solid grey;
  border-radius: 4px;
  padding: 0.5rem;
  background: ${(props) => props.theme.text};
  /* color: ${(props) => props.theme.text}; */

  &:hover {
    font-weight: bold;
    color: ${(props) => props.theme.navActive};
  }
`;

export const SearchIcon = styled(FaSearch)`
  color: ${(props) => props.theme.body};
  /* margin-right: 0.5rem; */
  &:hover {
    /* font-size: 2rem; */
    cursor: pointer;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  border-radius: 4px;
  background: ${(props) => props.theme.text};
  /* z-index: 100; */
  color: ${(props) => props.theme.body};
  &:after {
    content: 'Search for your favorite images';
    position: absolute;
    transition: transform 0.15s linear, font-size 0.25s linear;
    top: 50%;
    width: 95%;
    /* z-index: 100; */
    letter-spacing: 1px;
    color: ${(props) => props.theme.navActive};
    font-weight: normal;
    left: 5%;
    font-size: ${({ focused }) => (focused ? '14px' : '16px')};
    transform: ${({ focused }) =>
      focused ? 'translateY(-50px) translateX(-5%);' : 'translateY(-50%);'};
  }
`;

export const List = styled.div`
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
