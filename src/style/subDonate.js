import styled from "styled-components";
import medias from "./medias/mediaQueries";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #38acff;

  h4 {
    margin-left: 160px;
    font-weight: bold;
    font-size: 40px;
    line-height: 54px;
    color: #ffffff;
  }

  button {
    margin-right: 160px;
    padding-left: 75px;
    padding-right: 75px;
    border: none;
    background: #ff40a7;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    cursor: pointer;

    p {
      font-size: 20px;
      font-weight: bold;
      color: #ffffff;
      white-space: nowrap;
      padding-right: 70px;
    }

    transition: all ease 0.2s;
    &:hover {
      filter: brightness(120%);
    }
  }

  @media only screen and (${medias.desktop}) {
    button {
      p {
        padding-right: 71px;
      }
    }
  }

  @media only screen and (${medias.laptop_small}) {
    flex-direction: column;

    button {
      margin: auto;
      margin-bottom: 53.2px;

      p {
        padding-right: 0px;
      }
    }
  }

  @media only screen and (${medias.tablet}) {
    flex-direction: column;

    h4 {
      margin-left: 30px;
    }

    button {
      margin: auto;
      margin-bottom: 53.2px;

      p {
        padding-right: 0px;
      }
    }
  }

  @media only screen and (${medias.tablet_small}) {
    flex-direction: column;

    h4 {
      margin-left: 50px;
    }

    button {
      margin: auto;
      margin-bottom: 53.2px;

      p {
        padding-right: 0px;
      }
    }
  }

  @media only screen and (${medias.mobile}) {
    flex-direction: column;

    h4 {
      margin-left: 60px;
    }

    button {
      margin: auto;
      margin-bottom: 53.2px;

      p {
        padding-right: 0px;
      }
    }
  }

  @media only screen and (${medias.mobile_small}) {
    flex-direction: column;

    h4 {
      margin-left: 25px;
    }

    button {
      margin: auto;
      margin-bottom: 53.2px;

      p {
        padding-right: 0px;
      }
    }
  }
`;
