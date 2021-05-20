import styled from 'styled-components';

import helping from '../../assets/ajuda.png';

export const Helping = styled.section`

height:38.125rem;
width:100%;

margin-top:-50px;

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
`