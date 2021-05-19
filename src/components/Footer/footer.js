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
                padding:bottom:24px;
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
                padding:bottom:24px;
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
                padding:bottom:24px;
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
`;