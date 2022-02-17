import styled from 'styled-components'

export const OurTeamStyled = styled.div`
  width: 100%;
  background-color: #F4F4F4;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  

  & div{
    padding: 15px 0;
  }
 
  & h2 {
    color: #FF40A7;
    font-weight: 600;
  }

  & p {
    color: #5D5D66;
    font-weight: 400;
    font-size: 16px;
  }

  & img {
    width: 720px;
    height: 400px;
  }
`