import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
              margin: 0;
              --Main-hue:#00FFFF;
              --Cta-color:#9BFFFF;
              --Bg-color:#0D2424;
              --Like-color:#f17878;
              --Border-color:#637272;
              --Pri-txt:#FFFFFF;
              --Sec-txt:#C3C9C9;
              --Card-color:#1E3434;
              background-color:var(--Bg-color);
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
  color: var(--Cta-color);
  background-color: var(--Card-color);

  a {
    color: var(--Cta-color);
  }
  input {
    background-color: var(--Bg-color);
    border: none;
    width: 30%;
    color: var(--Pri-txt);
    height: 25px;
  }

  .fa-github {
    font-size: 25px;
  }

  h2 {
    color: var(--Main-hue);
  }
`;

export const GalleryCont = styled.div`
  display: flex;
  background-color: var(--Bg-color);
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ImageCard = styled.div`
  display: flex;
  background-color: var(--Card-color);
  max-width: 330px;
  flex-direction: column;
  margin: 20px;
  border: 1px solid var(--Border-color);
  padding: 0.2rem;
  border-radius: 10px;

  &:hover {
    box-shadow: 7px 9px 15px 0px var(--Cta-color);
  }
  img {
    cursor: pointer;
    width: 330px;
    height: 240px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

export const ImageTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  height: 60px;
  align-items: center;

  h2 {
    color: var(--Cta-color);
    cursor: pointer;
  }

  h2:hover {
    color: var(--Main-hue);
  }
  span {
    width: auto;
    color: var(--Sec-txt);
  }
  div {
    display: flex;
    height: 90px;
    font-size: 20px;
    flex-direction: column;
    justify-content: space-around;
  }

  .fa-heart {
    color: var(--Like-color);
    padding: 0.3rem;
  }
  .fa-download,
  .fa-share {
    padding: 0.5rem;
    color: var(--Sec-txt);
    cursor: pointer;
  }
  .fa-download:hover {
    background-color: var(--Bg-color);
    color: var(--Main-hue);
    border-radius: 50%;
  }
  .fa-share:hover {
    background-color: var(--Bg-color);
    color: var(--Main-hue);
    border-radius: 50%;
  }
`;

export const IndividualImage = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--Pri-txt);
  img {
    width: 61%;
    height: 64vh;
  }

  h1 {
    color: var(--Main-hue);
  }
`;

export const DetailCont = styled.div`
  display: flex;
  width: 300px;
  gap: 20px;
  color: var(--Sec-txt);
  .fa-map-marker {
    color: var(--Cta-color);
    padding: 0.3rem;
    font-size: 20px;
  }
  .fa-heart {
    color: var(--Like-color);
    padding: 0.3rem;
    font-size: 20px;
  }
`;
