import styled from "styled-components";

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
`;
