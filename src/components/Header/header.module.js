import styled from 'styled-components';

export const Container = styled.header`
width:100vw;
height:6.25rem;



display:flex;
justify-content:center;
justify-content: space-evenly;
align-items:center;
color:#111;

a{
    text-decoration:none;
    color:#111
}

.logo{
    padding-left:70px;
}

nav{
    a{
        padding:0 20px;
    }
}

.social{
    padding-right:70px;
    a{
        padding:0 20px;
    }
}
`;