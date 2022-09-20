import { Container } from "style/subDonate";
import { Button } from "@mui/material";

export function Donate() {
  return (
    <Container>
      <h4>Nos ajude a transformar a vida dessas pessoas!</h4>
      <button>
        <a 
          href="https://conselhodobrasil.org/transparencia/" 
          target="_blank" 
          style={{textDecoration: 'none'}} 
          rel='noreferrer'>
          <p>Faça sua doação</p>
        </a>
      </button>
    </Container>
  );
}
