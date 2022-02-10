import styled from "styled-components";
import medias from "./medias/mediaQueries";
import background from "../assets/connectando-pessoas.png";

export const Donate = styled.section`
    height:41.25rem;
    width:100%;
    overflow:hidden;

    padding: 0;
    display:flex;
    

    
    background-color:#FF40A7;
    section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
}

section {
    margin-bottom: 106px;
}

div{
    width:33.75rem;
}

.mobile-background {
    width: 100%;
}

.donate-left{
    display:inherit;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    color:#f1f1f1;
    overflow:hidden;

    h1{
        font-weight:800;
        font-size:4.0rem;
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
    margin-left: 3rem;
}

.background{
    height: 43.75rem;
    width: 43.75rem;
    background-image:url(${background});
    background-size: contain;
    background-position: center bottom;
    border-top-right-radius: none;
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    position: absolute;
    right: 30px;
    top: 0;

    
    
    transform: translate(+30px,-40px);

}

@media only screen and (${medias.desktop}) {
    .donate-right{
        margin-left: 23rem;
    }
}

@media only screen and (${medias.laptop}) {
    .donate-right{
        margin-left: 3rem;
    }
}

@media only screen and (${medias.laptop_small}) {
    .donate-right{
        width: 40%
    }
}

@media only screen and (${medias.tablet}) {
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: rgba(255, 64, 167,0.5);
    background-blend-mode: lighten;

    .donate-right{
        display: none;
    }

    section {
        width: 100%;
        margin: 0;
        
    }

    .donate-left{
        width:100%;
        margin: 44px 16px 110px;
        align-items:center;
    
        h1 {
            text-align:center;
            
        }
    
        p{
            display: none;
        }

        a{
            font-weight: bold;
            font-size: 18px;
        }
    
        }
    }
}

@media only screen and (${medias.mobile}) {
    .donate-left{
    
        h1 {
            font-size: 50px;
            
        }
}

@media only screen and (${medias.mobile_small}) {
    .donate-left{
        margin: 0 50px 0;
    
        h1 {
            font-size: 33px;
            
        }
        a{
            padding: 7px 20px;
            font-size: 16px;
            width: 60%;
        }
    }
}

@media (max-width:768px){
    height:500px;
    width:100%;

div{
    width:100%;
}

/* .donate-left{
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
} */

.background{
    width:100%;
    background-position:center;
    border-radius:0;
    
    transform: translate(0,0);

}

/* @media (max-width:425px){
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
} */
`;
