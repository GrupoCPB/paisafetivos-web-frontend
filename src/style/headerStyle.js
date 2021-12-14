import styled from 'styled-components';
import medias from "./medias/mediaQueries";
import colors from './colors/styleColors';

export const Container = styled.header`
font-family: sans-serif;
height:15vh;
max-width:71.25rem;
margin:auto;
display:flex;
justify-content: space-evenly;
align-items:center;
color:${colors.font_header};
letter-spacing: 1.5px;

.social{
  a{
    padding:0 10px;
    &:hover{
      opacity:75%;
      background-color: ${colors.background_header_hover}; 
    }
  }
}

@media only screen and (${medias.desktop}) {
  
}

@media only screen and (${medias.laptop}) {
 
}

@media only screen and (${medias.laptop_small}) {
  
}

@media only screen and (${medias.tablet}) {
 
}

@media only screen and (${medias.mobile}) {
  
}

@media only screen and (${medias.mobile_small}) {
  
}


@media (max-width:1025px){
  height:15rem;
  max-width:800px;
  flex-direction:column;
}

@media (max-width:320px){
  height:15rem;
  max-width:71.25rem;
  margin:auto;


  display:flex;
  justify-content:center;
  justify-content: space-evenly;
  align-items:center;
  color:${colors.font_header};

  a{
    text-decoration:none;
    color:${colors.font_header};
  }

  nav{
    padding:0 150px;
    a{
      padding:0 10px;
      &:hover{
        opacity:75%;
      }
    }
  }

  .social{
    a{padding:0 10px;
      &:hover{
        opacity:75%
      }
    }
  }
}
`;

export const DropDown = styled.div`
margin: 0;
padding: 0;

ul {
  list-style-type: none;
  padding: 0;
  overflow-y: hidden;
  li {
    display: inline;
    position: relative;
    &:hover{
      ul {
        height: 152px;
        position: fixed;
        visibility: visible;
      }
    }
    a {
      color:${colors.font_header};
      text-decoration: none;
      display: inline-block;
      padding: 10px;
      transition: background .5s;
      &:hover{
        background-color: ${colors.background_header_hover}; 
        opacity:75%;
      }
      img {
        width: 10px;
        margin: 3px 15px;
      }
    }
  }
  ul {
    font-size: 10pt;
    display: none;
    left: 1;
    position: absolute;
    background-color:${colors.background_header};
    width: 155px;
    display: block;
    height: 0;
    transition: .6s;
    visibility: hidden;
    overflow-y: hidden;
    li{
      a {
        display: block;
        &:hover{
          border-left: 4px solid black;
        }
      }
    }
  }
}`;