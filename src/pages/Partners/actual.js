import styled from "styled-components";
import medias from "../../style/medias/mediaQueries";

export const ActualPartners = styled.section`
  margin: 68px 113px;

  .partners-area {
    &-title {
      h2 {
        margin-bottom: 10px;
        color: #262626;
        font-size: 47px;
        font-weight: 600;
      }
    }

    &-text {
      p {
        color: #262626;
        font-size: 24px;
        font-weight: 400;
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
