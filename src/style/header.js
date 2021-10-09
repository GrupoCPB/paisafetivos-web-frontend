import styled from 'styled-components';

const color = {
  font_header:"#111",
  background_header: "#FFFFFF",
  background_header_hover: "#B4BECB"
};

export const Container = styled.header`

height:5rem;
max-width:71.25rem;
margin:auto;
display:flex;
justify-content:center;
justify-content: space-evenly;
align-items:center;
color:${color.font_header};

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline;
  position: relative;
}

li{
  a {
    color:${color.font_header};
    text-decoration: none;
    display: inline-block;
    padding: 10px;
    transition: background .5s;
    &:hover{
    background-color: ${color.background_header_hover}; 
    }
  }
} 

/*sub menu*/
ul{
  ul {
    display: none;
    left: 1;
    position: absolute;
    background-color:${color.background_header};
    width: 150px
  }
}


ul{
  li:hover{
    ul {
      display: block;
      position: fixed;
    }
  }
}

ul{
  ul{
    li{
      a {
        display: block;
      }
    }
  }
}

.social{
  a{
    padding:0 10px;
    &:hover{
    opacity:75%;
    }
  }
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
color:#111;

  a{
    text-decoration:none;
    color:#111
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