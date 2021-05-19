import styled from 'styled-components';

import noticia1 from '../../assets/noticia-1.png';
import noticia2 from '../../assets/noticia-2.png';
import noticia3 from '../../assets/noticia-3.png';
import noticia4 from '../../assets/noticia-4.png';

export const Blog = styled.section`
    height:480px;

    color:#f1f1f1;
    background-color:#FF40A7;
    text-align:center;

    h2{
        font-size:60px;
        font-weight:500;

        padding-top:34px;
    }

    .blog-notice-area{
        width:100%;
        display:flex;
        justify-content:space-evenly;

        
        .notice{
            height:250px;
            width:300px;
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
            height:100px;
            width:100%;
            
            padding-top:5px;

            
            border-bottom-left-radius:12px;
            border-bottom-right-radius:12px;
            color:#111;
            background-color:rgba(196, 196, 196, 0.78);
            transition:all ease 0.4s;                
        }
    }

    .blog{
        width:100%;

        margin-top:20px;

        display:flex;
        justify-content:flex-end;
        align-items:flex-end;

        a{
            padding-right:5px;
            color:#f1f1f1;
            text-decoration:none;

            &:hover{
                text-decoration:underline;
            }

            img{
                margin-left:10px;
                margin-right:30px;
                transform:translatey(3px);
            }
        }
    }
`