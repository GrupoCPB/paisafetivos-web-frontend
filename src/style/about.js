import styled from "styled-components";

import about from "../assets/quem-somos.png";

export const About = styled.main`
  width: 100%;
  background-color: #f4f4f4;

  display: flex;
  justify-content: center;
  padding: 80px 0;

  .about-photo {
    width: 33.125rem;
    height: 33.125rem;
    background-image: url(${about});
    background-repeat: no-repeat;
  }

  .about-area {
    padding: 2.5rem 0;

    display: inherit;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 2.5rem;
      font-weight: 600;
    }

    .about-area-text {
      padding-left: 12.5rem;
      p {
        max-width: 25rem;
        padding-bottom: 2rem;
      }

      a {
        text-decoration: none;
        color: #2d9cdb;
        font-weight: 700;

        &:hover {
          text-decoration: underline;
        }
        img {
          height: 0.625rem;
          margin-left: 0.1875rem;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 80px 30px;

    div {
      width: 50%;
    }
    .about-photo {
      background-image: url(${about});
      background-position: center;
      background-repeat: no-repeat;
    }

    .about-area {
      padding: 2.5rem 0;
      justify-content: center;

      h2 {
        font-size: 2.5rem;
      }

      .about-area-text {
        padding-left: 2rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0;

    .about-photo {
      display: none;
    }

    .about-area {
      width: 100%;
      padding: 0;

      justify-content: center;

      h2 {
        font-size: 2.5rem;
        font-weight: 600;
      }

      .about-area-text {
        padding-left: 0;
        p {
          max-width: 25rem;
          padding-bottom: 2rem;
        }

        a {
          text-decoration: none;
          color: #2d9cdb;
          font-weight: 700;

          &:hover {
            text-decoration: underline;
          }
          img {
            height: 0.625rem;
            margin-left: 0.1875rem;
          }
        }
      }
    }
  }

  @media (max-width: 425px) {
    height: auto;
    display: block;

    .about-area {
      min-width: 320px;
      text-align: center;
      padding-bottom: 5rem;
      h2 {
        font-size: 30px;
        font-weight: 600;
      }

      .about-area-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 320px;
        p {
          width: auto;
          margin-top: -5px;
          padding: 0px 20px;
        }

        .about-link {
          width: 90%;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
`;
