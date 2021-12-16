import styled from 'styled-components';

export const StyledWhoWeAre = styled.div`
  width: 100%;
  min-height: 509px;
  background: #ebebeb;
  display: flex;

  & img {
    min-width: 50%;
  } 

  & div {
    padding: 0 100px;  
    min-height: 100%;

    & h2 {
      text-align: center;

      font-style: normal;
      font-weight: 600;
      font-size: 47px;
      line-height: 64px;
      color: #ff40a7;
    }

    & p {
      font-size: 1rem;
      line-height: 22px;
      letter-spacing: 0.005em;
      text-align: justify;

      color: #5d5d66;
    }
  }
`;
