import styled from "styled-components";
import medias from "./medias/mediaQueries";

import background from "../assets/partners-image.jpeg";
import colors from "./colors/styleColors";

export const Partnership = styled.section`
  background-color: ${colors.background_container_gray};
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 720px 541px;
  display: flex;
  justify-content: center;
  align-items: center;

  .partnership-area {
    &-title {
      margin-left: 71px;
      h2 {
        color: ${colors.font_h2_pink};
        font-size: 47px;
        font-weight: 600;
        margin-bottom: 4px;
      }
    }

    &-text {
      margin-left: 71px;
      margin-right: 845px;
      p {
        color: ${colors.font_text_light};
        font-weight: 400;
        font-size: 16px;
      }
    }

    &-link {
      margin-bottom: 68px;
      margin-left: 71px;
      a {
        color: ${colors.font_link};
        font-weight: 700;
        font-size: 20px;
        text-decoration: none;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media only screen and (${medias.laptop}) {
    background-size: 745px 566px;
  }

  @media only screen and (${medias.laptop_small}) {
    background-position: bottom;
    .partnership-area {
      &-text {
        margin-right: 71px;
      }

      &-link {
        margin-bottom: 600px;
      }
    }
  }

  @media only screen and (${medias.tablet}) {
    background-position: bottom;
    .partnership-area {
      &-text {
        margin-right: 71px;
      }

      &-link {
        margin-bottom: 600px;
      }
    }
  }

  @media only screen and (${medias.tablet_small}) {
    background-position: bottom;
    .partnership-area {
      &-text {
        margin-right: 71px;
      }

      &-link {
        margin-bottom: 600px;
      }
    }
  }

  @media only screen and (${medias.mobile}) {
    background-position: bottom;
    .partnership-area {
      &-text {
        margin-right: 71px;
      }

      &-link {
        margin-bottom: 600px;
      }
    }
  }

  @media only screen and (${medias.mobile_small}) {
    background-size: 445px 266px;
    background-position: bottom;
    .partnership-area {
      &-title {
        margin-left: 50px;
      }

      &-text {
        margin-right: 50px;
        margin-left: 50px;
      }

      &-link {
        margin-bottom: 300px;
        margin-left: 50px;
      }
    }
  }
`;
