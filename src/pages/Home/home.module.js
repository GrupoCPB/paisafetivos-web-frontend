import styled from 'styled-components';
import background from '../../assets/connectando-pessoas.png';
import about from '../../assets/quem-somos.png';
import helping from '../../assets/ajuda.png';

export const Container = styled.section`

.section-donate{
    height:41.25rem;
    width:100%;
    overflow:hidden;


    display:flex;
    justify-content:center;
    align-items:center;

background-color:#FF40A7;

}

div{
    width:33.75rem;
}

.donate-left{
    color:#f1f1f1;
    h1{
        font-weight:800;
        font-size:4.5rem;
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

}

.background{
    height:43.75rem;
    width:43.75rem;
    background-image:url(${background});
    background-size:cover;
    background-position:right;
    border-top-right-radius:none;
    border-top-left-radius:50%;
    border-bottom-right-radius:50%;
    border-bottom-left-radius:50%;

    
    
    transform: translate(+30px,-40px);

}

.about{
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
}


.helping{
    height:38.125rem;
    width:100%;

    display:flex;
    justify-content:center;

    .helping-photo{
        height:400px;
        width:590px;
        background-size:cover;
        background-position:center;
        background-image:url(${helping});
        background-repeat:no-repeat;
    }

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
}
`;