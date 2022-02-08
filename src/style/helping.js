import styled from "styled-components";

import helping from "../assets/ajuda.png";

export const Helping = styled.section`

height:38.125rem;
width:100%;

margin-top:50px;

display:flex;
justify-content:center;
justify-content:space-evenly;

    .helping-area{       
        
        h2{
            font-size:40px;
            font-weight:600;
        }

        .helping-area-text{
            p{
                max-width:400px;
                padding-bottom:32px;
            }

            a{
                text-decoration:none;
                color:#2D9CDB;
                font-weight:700;

                &:hover{
                    text-decoration:underline;                    
                }
                img{
                    height:10px;
                    margin-left:3px;
                }
            }
        }          
            
    }
    .helping-photo{
        height:400px;
        width:590px;
        background-size:cover;
        background-position:center;
        background-image:url(${helping});
        background-repeat:no-repeat;
    }
}

@media (max-width:1024px){


    div{
        width:50%;
        margin:10px;
    }

    .helping-area{       
        display:inherit;
        flex-direction:column;
        align-items:center;
        

        .helping-area-text{
            p{
                width:320px;
            }

           
        }          
            
    }
    .helping-photo{
        width:50%;
        border-radius:1rem;
    }
}


@media (max-width:768px){
    
height:38.125rem;
width:100%;

margin-top:50px;

display:flex;
justify-content:center;

    .helping-area{  
        width:100%;         

        .helping-area-text{            
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
           
            .helping-link{
                display:inheirt;
                aling-items:flex-start;
                justify-content:flex-start;
                width:85%;
            }
        }          
            
    }
    .helping-photo{
        display:none;        
    }

}

@media (max-width:425px){
    .helping-area{
        min-width:320px;
        h2{
            font-size:30px;
        }

        .helping-area-text{
            width:inherit;
            p{
                width:auto;
                margin-top:-5px;
                padding:0px 20px;
            }

            .helping-link{
                width:90%;
                display:flex;
                justify-content:flex-end;
            }
        }
    }
}
`;
