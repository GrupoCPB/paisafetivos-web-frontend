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


@media (max-width:1024px){
    margin-top:-6.375rem;
    padding-bottom:3.625rem;
    
       h2{
           font-size:45px;
       }
       
      
        .works-cards{
            flex-wrap:wrap;
            .works-card{
                height:400px;
                margin-bottom:1rem;

                img{
                    height:4.875rem;
                }                
            }
        }
    
}


@media (max-width:425px){
    margin-top:-13.375rem;
    
       h2{
           font-size:30px;
       }
       
      
        .works-cards{
            
            .works-card{
                display:inherit;
                flex-wrap:wrap;  
                align-items:center;
                justify-content:center;              
                height:165px;
    
               
                background-color:#ffffff;
                border-radius:0.4375rem;
                filter: drop-shadow(1px 2px 1px rgba(0,0,0,0.25));
                img{
                    height:40px;
                    padding-top:1rem;
                }
    
                h6{
                    margin:0;
                    margin-top:1rem;
                    font-size:27px;
                }
                
                p{
                    width:320px;
                    font-size:14px;
                    padding:0;
                }
            }
        }
    
}
`