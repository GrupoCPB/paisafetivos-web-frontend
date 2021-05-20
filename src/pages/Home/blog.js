import styled from 'styled-components';

import noticia1 from '../../assets/noticia-1.png';
import noticia2 from '../../assets/noticia-2.png';
import noticia3 from '../../assets/noticia-3.png';
import noticia4 from '../../assets/noticia-4.png';

export const Blog = styled.section`
    height:33rem;

    color:#f1f1f1;
    background-color:#FF40A7;
    text-align:center;

    h2{
        font-size:3.75rem;
        font-weight:500;

        padding-top:2.125rem;
    }

    .blog-notice-area{
        width:100%;
        display:flex;
        justify-content:space-evenly;

        
        .notice{
            height:15.625rem;
            width:18.75rem;
            display:flex;
            jusfity-content:flex-end;
            align-items:flex-end;

            
            &:hover{
                .notice--info{
                    opacity:1;
                }
            }
        }

        .notice-photo-1{
            background-image:url(${noticia1});
            background-position:center;
            background-size:cover;
            
        }
        .notice-photo-2{
            background-image:url(${noticia2});
            background-position:center;
            background-size:cover;
        }
        .notice-photo-3{
            background-image:url(${noticia3});
            background-position:center;
            background-size:cover;
        }
        .notice-photo-4{
            background-image:url(${noticia4});
            background-position:center;
            background-size:cover;            
        }

        .notice--info{
            opacity:0;
            height:6.25rem;
            width:100%;
            
            padding-top:0.3125rem;

            
            border-bottom-left-radius:0.75rem;
            border-bottom-right-radius:0.75rem;
            color:#111;
            background-color:rgba(196, 196, 196, 0.78);
            transition:all ease 0.4s;                
        }
    }

    .blog{
        width:100%;

        margin-top:1.25rem;

        display:flex;
        justify-content:flex-end;
        align-items:flex-end;

        a{
            padding-right:0.3125rem;
            color:#f1f1f1;
            text-decoration:none;

            &:hover{
                text-decoration:underline;
            }

            img{
                margin-left:0.625rem;
                margin-right:1.875rem;
                transform:translatey(0.1875rem);
            }
        }
    }

    
@media (max-width:1024px){
    height:auto;
    h2{
        font-size:45px;
    }

    .blog-notice-area{
        flex-wrap:wrap;

        
        .notice{
            margin-bottom:1rem;
        }        
        .notice--info{
            opacity:1;
            height:5.25rem;              
        }
    }

    .blog{
        width:100%;

        margin-top:0;
        padding:1rem;
    }

}

@media (max-width:320px){   

    h2{
        font-size:30px;        
    }

    .blog-notice-area{
        .notice{
            width:300px;
        }
        .notice--info{
            opacity:1;
        }
       

    .blog{
        padding:0;
        margin-top:0rem;

        display:flex;
        justify-content:flex-end;
        align-items:flex-end;

        a{
            padding-right:0px;
            color:#f1f1f1;
            text-decoration:none;

            &:hover{
                text-decoration:underline;
            }

            img{
                margin-left:0rem;
                margin-right:0rem;
                transform:translatey(0rem);
            }
        }
    }
}
`