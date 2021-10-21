import styled from "styled-components";

import background from "../../assets/partners-image.jpeg";

export const Partnership = styled.section`
  background-color: #ebebeb;
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
        color: #ff40a7;
        font-size: 47px;
        font-weight: 600;
        margin-bottom: 4px;
      }
    }

    &-text {
      margin-left: 71px;
      margin-right: 845px;
      p {
        color: #5d5d66;
        font-weight: 400;
        font-size: 16px;
      }
    }

    &-link {
      margin-bottom: 68px;
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
