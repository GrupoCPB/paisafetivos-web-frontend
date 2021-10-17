import styled from "styled-components";

import background from "../../assets/partners-image.jpeg";

export const Partnership = styled.section`
  background-color: #ebebeb;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 720px 541px;

  .partnership-area {

    .partnership-area-title {
        margin-left: 71px;
      h1 {
        color: #ff40a7;
        font-size: 47px;
        font-weight: 600;
      }
    }

    .partnership-area-text {
        margin-left: 71px;
        margin-right: 845px;
      p {
        color: #5d5d66;
        font-weight: 400;
        font-size: 16px;
      }
    }

    .partnership-area-link {
        margin-bottom: 30px;
        margin-left: 71px;
      a {
        color: #2d9cdb;
        font-weight: 700;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
`;
