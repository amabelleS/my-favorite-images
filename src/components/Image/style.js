import styled from 'styled-components';
import { FaPlus, FaHeart } from 'react-icons/fa';

export const ContentImage = styled.li`
  background-image: url(${(props) => props.img});
  width: 150px;
  height: 99px;
  /* overflow-y: hidden !important; */
  /* overflow-x: hidden !important; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
`;

export const PlusIcon = styled(FaPlus)`
  text-align: center;
  display: block;
  font-size: 2rem;
  margin: 2rem auto;
  width: 40%;
  z-index: 777;
  &:hover {
    font-size: 2.3rem;
    cursor: pointer;
  }
`;

export const HeartIcon = styled(FaHeart)`
  text-align: center;
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

export const HeartIconNoMargin = styled(FaHeart)`
  display: block;
  font-size: 2rem;
  width: 40%;
  color: red;
  &:hover {
    cursor: pointer;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
`;
