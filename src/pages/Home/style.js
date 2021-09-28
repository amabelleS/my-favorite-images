import styled from 'styled-components';

export const Home = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-block-start: 100px;
`;

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  /* color: ${(props) => props.theme.text}; */
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
