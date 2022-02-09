import styled from 'styled-components';

export const Container = styled.footer`
    height:300px;
    display:flex;
    padding:50px 150px;
    color:#f4f4f4;
    background-color:#0B0D17;
    
    .info-left{
        max-width:320px;

        img{
            padding-bottom:14px;
        }
        p{
            font-size:14px;
        }
        nav{
            margin-top:32px;
            transform: translatex(-18px);

            a{
                padding:0 18px;
                
                &:hover{
                        opacity:70%;
                    }
            }
        }
    }

    .info-right{
        width:100%;

        display:flex;
        justify-content:space-evenly;
        padding-left:100px;

        .info-right-pages{
            h6{
                font-weight:400;
                font-size:20px;
                padding-bottom: 24px;
            }

            nav{
                display:flex;
                flex-direction:column;

                a{
                    padding-bottom:12px;
                    text-decoration:none;
                    color:#f1f1f1;

                    &:hover{
                        opacity:70%;
                        text-decoration:underline;
                    }
                }
            }
        }

        .info-right-helping{
            h6{
                font-weight:400;
                font-size:20px;
                padding-bottom: 24px;
            }

            nav{
                display:flex;
                flex-direction:column;

                a{
                    padding-bottom:12px;
                    text-decoration:none;
                    color:#f1f1f1;

                    &:hover{
                        opacity:70%;
                        text-decoration:underline;
                    }
                }
            }
        }

        .info-right-contact{
            h6{
                font-weight:400;
                font-size:20px;
            }

            nav{
                display:flex;
                flex-direction:column;

                a{
                    padding-bottom:12px;
                    text-decoration:none;

                    color:#f1f1f1;

                    img{
                        padding-right:10px;
                        opacity:100%;
                    }

                    &:hover{
                        opacity:70%;
                        text-decoration:underline;
                        
                    }
                    
                }
            }
        }
    }

@media (max-width:1024px){
    height:auto;
    flex-wrap:wrap;
    justify-content:center;
    padding:50px 50px;

    .info-left{
    text-align:center;
  }
}

@media (max-width:768px){
    padding:50px 0px;
    
    .info-left{
      max-width:320px;
    }

    .info-right{
      padding-left:0px;
    }
}

@media (max-width:425px){
    padding:40px 10px;
    
    .info-left{
        img{
            padding-bottom:0px;
        }
        p{
            font-size:14px;
        }
        nav{
            margin-top:32px;
            transform: translatex(0px);

            a{
                padding:0 16px;
            }
        }
    }

    .info-right{
        display:flex;
        flex-direction:column;
        align-items:center;
        padding-left:0px;

        .info-right-pages{
            h6{
                margin-bottom:12px;
            }
        }

        .info-right-helping{
            h6{
                margin-bottom:12px;
            }
        }

        .info-right-contact{
            h6{
                margin-bottom:12px;
            }
        }
    }
}`;