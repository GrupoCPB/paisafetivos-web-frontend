import styled from 'styled-components';

import background from '../../assets/connectando-pessoas.png';

export const Donate = styled.section`
    height:41.25rem;
    width:100%;
    overflow:hidden;


    display:flex;
    justify-content:center;
    align-items:center;

    background-color:#FF40A7;



div{
    width:33.75rem;
}

.donate-left{
    color:#f1f1f1;
    h1{
        font-weight:800;
        font-size:4.5rem;
    }
    p{
        margin-top:-1rem;
        padding-bottom:1rem;
        max-width:27.5rem;
    }
    a{
        font-size:1.25rem;
        padding:1.1875rem 3.6875rem;
        border-radius:0.625rem;

        text-decoration:none;
        color:#f1f1f1;
        background-color:#0F6FFF;

        transition:all ease 0.2s;
        &:hover{
            filter:brightness(120%);
        }
    }
}
.donate-right{

}

.background{
    height:43.75rem;
    width:43.75rem;
    background-image:url(${background});
    background-size:cover;
    background-position:right;
    border-top-right-radius:none;
    border-top-left-radius:50%;
    border-bottom-right-radius:50%;
    border-bottom-left-radius:50%;

    
    
    transform: translate(+1.875rem,-2.5rem);

}
`;