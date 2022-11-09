import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
              margin: 0;
}
`;
export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;
  background-color: blue;
`;

export const GalleryCont = styled.div`
  display: flex;
  background-color: green;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ImageCard = styled.div`
  display: flex;
  background-color: white;
  max-width: 330px;
  flex-direction: column;
  margin: 20px;
  border-radius: 10px;
  img {
    width: 330px;
    height: 240px;
  }
`;

export const ImageTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;

  span {
    width: auto;
    padding-right: 3rem;
  }
  div {
    display: flex;
    height: 100%;
    font-size: 20px;
    flex-direction: column;
    justify-content: space-around;
  }
`;
