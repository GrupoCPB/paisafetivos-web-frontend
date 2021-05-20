import styled from 'styled-components';

import about from '../../assets/quem-somos.png';

export const About = styled.main`
    height:38.125rem;
    width:100%;

    display:flex;
    justify-content:center;
    padding:80px 0;

    .about-photo{
        min-width:530px;
        background-image:url(${about});
        background-repeat:no-repeat;
    }

    .about-area{
        padding:40px 0;
        
        display:inherit;
        flex-direction:column;
        align-items:center;
        
        h2{
            font-size:40px;
            font-weight:600;
        }

        .about-area-text{
            padding-left:200px;
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
`;