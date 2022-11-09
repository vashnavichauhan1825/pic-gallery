import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
              margin: 0;
}
a {
    text-decoration: none;
  }
`;
export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;
  background-color: blue;

  input {
    background-color: antiquewhite;
    border: none;
    width: 30%;
    color: white;
    height: 25px;
  }
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
  height: 75px;
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

export const IndividualImage = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  img {
    width: 61%;
    height: 64vh;
  }
`;
