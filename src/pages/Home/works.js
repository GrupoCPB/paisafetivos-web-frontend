import styled from 'styled-components';



export const Works = styled.section`
margin-top:-150px;
    text-align:center;
    background-color:#f4f4f4;
    
       h2{
           font-size:60px;
           font-weight:500;
       }
       
       #title-works{
           font-size:70px;
       }
        .works-cards{
            display:flex;
            justify-content:center;
            width:100%;
    
            justify-contetent:center;
    
            .works-card{
                width:300px;
                height:450px;
    
                margin:0px 16px;
                background-color:#ffffff;
                border-radius:7px;
                filter: drop-shadow(1px 0px 1px rgba(0,0,0,0.25));
                img{
                    height:110px;
                    padding-top:50px;
                }
    
                h6{
                    margin:10px 0;
                    font-size:27px;
                    font-weight:600;
                }
                p{
                    padding:7px 40px;
                }
            }
        }
    
}
`