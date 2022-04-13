import styled from 'styled-components'
// import { theme } from './theme.jsx'

export const HowHelpStyle = styled.main`
  a{
    text-decoration: none;
    color: #38ACFF;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
  a:hover{
    text-decoration-line: underline;
    color:#0F6FFF;
  }

  button:hover{
    text-decoration-line: underline;
    color:#0F6FFF;
  }

  .help-initial-text{
    background-color: #FBFBFB;
    padding: 100px;
    display: flex;
    justify-content: space-between;

    h2{
      color: #4B4B4B;
      font-weight: 800;
      font-size: 36px;
      margin-bottom: 20px;
    }

    p{
      color: #545454;
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
    }
  }
`