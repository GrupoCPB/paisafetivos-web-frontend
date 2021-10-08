import styled from 'styled-components';

import background from '../assets/connectando-pessoas.png';

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
    width:50%;
    display:inherit;
    flex-direction:column;
    justify-content:center;
    align-items:center;


    color:#f1f1f1;
    overflow:hidden;
    h1{
        font-weight:800;
        font-size:4.5rem;
    }
    p{
        margin-top:-16px;
        padding-bottom:1rem;
        max-width:27.5rem;
    }
    a{
        font-size:20px;
        padding:19px 59px;
        border-radius:10px;

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
    width:50%;
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

    
    
    transform: translate(+30px,-40px);

}


@media (max-width:768px){
    height:500px;
    width:100%;

div{
    width:100%;
}

.donate-left{
    width:100%;
    height:inherit;
    position:absolute;
    z-index:99;

    background-color:rgba(255, 64, 167, 0.6);
    h1{
        font-size:3.5rem;
    }
    p{
        margin-top:-26px;
        max-width:20.5rem;
    }
    a{
        font-size:17px;
    }
}
.donate-right{
    width:100%;
}

.background{
    width:100%;
    background-position:center;
    border-radius:0;
    
    transform: translate(0,0);

}

@media (max-width:425px){
    height:265px;
    width:100%;

.donate-left{
    h1{
        text-align:center;
        font-size:35px;
    }
    p{
       display:none;
    }
    a{
        margin-top:-20px;
        padding:10px 19px;
    }
}

`;