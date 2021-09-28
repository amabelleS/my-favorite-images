import styled from 'styled-components';
import { FaPlus, FaHeart } from 'react-icons/fa';

export const ContentImage = styled.div`
  background-image: url(${(props) => props.img});
  width: 150px;
  height: 99px;
  /* object-fit: cover; */
  overflow-y: hidden !important;
  overflow-x: hidden !important;
  background-size: cover;
  /* background-size: contain; */
  background-repeat: no-repeat;
  background-position: right;
`;

export const PlusIcon = styled(FaPlus)`
  /* position: relative; */
  text-align: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  display: block;
  font-size: 2rem;
  margin: 2rem auto;
  width: 40%;
  &:hover {
    font-size: 2.3rem;
    cursor: pointer;
  }
`;

export const HeartIcon = styled(FaHeart)`
  /* position: relative; */
  text-align: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  display: block;
  font-size: 2rem;
  margin: 2rem auto;
  width: 40%;
  color: red;
  &:hover {
    font-size: 2.3rem;
    cursor: pointer;
  }
`;
