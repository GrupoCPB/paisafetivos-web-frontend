import styled from "styled-components";
import medias from "./medias/mediaQueries";
import colors from './colors/styleColors';

import fundo from 'assets/rectangle.png';

export const ActualPartners = styled.section`
  margin-top: 51px;
  background-color: #FBFBFB;

  h2{
    font-weight: 600;
    font-size: 47px;
  }
  p{
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
  }
  

  .header-partners{
    background-image: url(${fundo});
    margin-top:-13px;
    padding: 42px 451px 50px;
    text-align: center;
    color: #ffffff;
    line-height: 64.2px;
  }
  
  .partners-form{
    p{
      font-size: 28.5px;
    }
  }
  
  .partners-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10rem 0;

    &-title {
      h2 {
        margin-bottom: 10px;
        color: ${colors.font_h2};
        font-size: 35px;
        font-weight: 700;
      }
    }

    &-text {
      p {
        color: #262626;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        line-height: 32px;
      }
    }

    &-images{
      text-align: center;
      margin-top: 4em;
    }

  }

  @media only screen and (${medias.tablet}) {
    .partners-area {
      &-images {
        img {
          height: 60px;
          margin-right: 34px;
        }
      }
    }
  }

  @media only screen and (${medias.tablet_small}) {
    .partners-area {
      &-images {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          height: 60px;
          margin-right: 2px;
        }
      }
    }
  }

  @media only screen and (${medias.mobile}) {
    margin: 68px 50px;
    .partners-area {
      &-images {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          height: 60px;
          margin-right: 2px;
        }
      }
    }
  }

  @media only screen and (${medias.mobile_small}) {
    margin: 68px 50px;
    .partners-area {
      &-images {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          height: 60px;
          margin-right: 2px;
        }
      }
    }
  }
`;
