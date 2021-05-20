import styled from 'styled-components';



export const Brand = styled.section`
    height:10.625rem;
    width:100%;
    
    display:flex;
    justify-content:center;
    justify-content:space-evenly;
    align-items:center;

    margin:1rem 0;

    background-color:#f7f6f5;
    img{
        max-height:3.125rem;
    }

@media (min-width:320px){
    height:auto;
    flex-wrap:wrap;
    img{
        padding:1rem;
    }
}
`