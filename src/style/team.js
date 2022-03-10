import styled from 'styled-components'

export const OurTeamStyled = styled.main`
  width: 100%;

 
  & .info-inicial{
    background-color: #F4F4F4;
    display: flex;
    justify-content: space-between;
    align-items: center;

      h2 {
        padding-left: 73px;
        color: #FF40A7;
        font-weight: 600;
      }

      p {
        padding-left: 73px;
        color: #5D5D66;
        font-weight: 400;
        font-size: 16px;
        line-height:21.86px;
      }

      img {
        width: 720px;
        height: 448px;
      }
  }

  & .executive-people{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: inherit;
    padding: 5rem;

    h4{
      background-color: #F5309A;
      font-weight: 600;
      font-size: 35px;
      color: #fbfbfb;
      line-height: 48px;
      letter-spacing: 0.0025em;
      padding: 11px 29px 11px 25px;
      
    }
  }

  & .finance-people {
    padding-top: 5rem;

    h4 {
      background-color: #0F6FFF;
      font-weight: 600;
      font-size: 35px;
      color: #fbfbfb;
      line-height: 48px;
      letter-spacing: 0.0025em;
      padding: 11px 25px 11px 45px;
    }
  }

  & .hr-people{
    padding-top: 5rem;

    h4 {
      background-color: #9b04b6;
      font-weight: 600;
      font-size: 35px;
      color: #fbfbfb;
      line-height: 48px;
      letter-spacing: 0.0025em;
      padding: 11px 20px 11px 25px;
    }
  }

  & .marketing-people{
    padding-top: 5rem;

    h4 {
      background-color: #f78c2c;
      font-weight: 600;
      font-size: 35px;
      color: #fbfbfb;
      line-height: 48px;
      letter-spacing: 0.0025em;
      padding: 11px 20px 11px 37px;
    }
  }
`