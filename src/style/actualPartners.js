import styled from "styled-components";
import medias from "./medias/mediaQueries";
import colors from './colors/styleColors';

export const ActualPartners = styled.section`
  margin: 68px 113px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .partners-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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

    &-images {  
      img {
        height: 80px;
        margin-right: 54px;
        margin-top: 41px;
        margin-bottom: 41px;
      }
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
