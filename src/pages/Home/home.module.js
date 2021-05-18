import styled from 'styled-components';
import background from '../../assets/connectando-pessoas.png';

export const Container = styled.section`

.section-donate{
    height:41.25rem;
    width:100%;
    overflow:hidden;


    display:flex;
    justify-content:center;
    align-items:center;

background-color:#FF40A7;

}

div{
    width:540px;
}

.about-left{
    color:#f1f1f1;
    h1{
        font-weight:800;
        font-size:4.5rem;
    }
    p{
        margin-top:-16px;
        padding-bottom:1rem;
        max-width:440px;
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
.about-right{

}

.background{
    height:700px;
    width:700px;
    background-image:url(${background});
    background-size:cover;
    background-position:right;
    border-top-right-radius:none;
    border-top-left-radius:50%;
    border-bottom-right-radius:50%;
    border-bottom-left-radius:50%;

    
    
    transform: translate(+30px,-40px);

}

`;