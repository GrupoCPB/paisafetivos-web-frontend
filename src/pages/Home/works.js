import styled from 'styled-components';



export const Works = styled.section`
    margin-top:-9.375rem;
    padding-bottom:3.625rem;
    text-align:center;
    background-color:#f4f4f4;
    
       h2{
           font-size:3.75rem;
           font-weight:500;
       }
       
       #title-works{
           font-size:4.375rem;
       }
        .works-cards{
            display:flex;
            justify-content:center;
            width:100%;
    
            justify-contetent:center;
    
            .works-card{
                width:18.75rem;
                height:28.125rem;
    
                margin:0px 1rem;
                background-color:#ffffff;
                border-radius:0.4375rem;
                filter: drop-shadow(1px 2px 1px rgba(0,0,0,0.25));
                img{
                    height:6.875rem;
                    padding-top:3.125rem;
                }
    
                h6{
                    margin:0.625rem 0;
                    font-size:1.6875rem;
                    font-weight:600;
                }
                p{
                    font-size:1.125rem;
                    padding:0.4375rem 2.5rem;
                }
            }
        }
    
}
`