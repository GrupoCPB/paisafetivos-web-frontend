import styled from "styled-components";
import medias from "./medias/mediaQueries";
// import colors from './colors/styleColors';

import fundo from 'assets/frame_29.png';

export const ActualPartners = styled.main`
  margin-top: 51px;
  background-color: #ffffff;


  h2{
    font-weight: 600;
    font-size: 47px;
  }
  p{
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
  }
  

  .header-partners-info{
    background-color: #FBFBFB;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 30px;
  }

  .header-partners-text{
    width: 527px;
    height: 564px;
    h6{
      color: #262626;
      font-size: 25px;
      font-weight: 400;
    }
    p{
      color: #878787;
    }
  }
  
  .partners-form{
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    background-color: #FfFfFf;
    border: 1px solid #e4e4e4;
    border-radius: 5px;
    width: 527px;
    height: 490px;
    padding-left: 3%;
    padding-top: 30px;
    margin: 50px;

    
    p{
      font-size: 28.5px;
      font-weight: 600;
      color: #4b4b4b;
      margin-bottom: 20px;
    }

    form{
      width: 90%;
    }

    .image-shadow{
      background-image: url(${fundo});
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
