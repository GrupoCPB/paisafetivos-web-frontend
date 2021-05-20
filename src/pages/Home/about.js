import styled from 'styled-components';

import about from '../../assets/quem-somos.png';

export const About = styled.main`
    height:38.125rem;
    width:100%;

    display:flex;
    justify-content:center;
    padding:80px 0;

    .about-photo{
        min-width:33.125rem;
        background-image:url(${about});
        background-repeat:no-repeat;
    }

    .about-area{
        padding:2.5rem 0;
        
        display:inherit;
        flex-direction:column;
        align-items:center;
        
        h2{
            font-size:2.5rem;
            font-weight:600;
        }

        .about-area-text{
            padding-left:12.5rem;
            p{
                max-width:25rem;
                padding-bottom:2rem;
            }

            a{
                text-decoration:none;
                color:#2D9CDB;
                font-weight:700;

                &:hover{
                    text-decoration:underline;                    
                }
                img{
                    height:0.625rem;
                    margin-left:0.1875rem;
                }
            }
        }        
    }
`;