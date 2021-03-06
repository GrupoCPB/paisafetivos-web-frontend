import { Container } from "style/footer";

import logo from "assets/logo-footer.png";
import facebook from "assets/facebook-branco-icon.png";
import telegram from "assets/telegram-branco-icon.png";
import instagram from "assets/instagram-branco-icon.png";
import twitter from "assets/twitter-branco-icon.png";

import MailIcon from '@mui/icons-material/Mail';

export function Footer() {
  return (
    <Container>
      <div className="info-left">
        <img src={logo} alt="logo Pais Afetivos" />
        <p>
          Organização sem fins lucrativos que atua por redes de contatos
          televirtuais em todo o Brasil, apoiando e acolhendo vítimas de
          violência.
        </p>
      </div>
      <div className="info-right">
        <div className="info-right-pages">
          <h6>Pais Afetivos</h6>
          <nav>
            <a href="/sobre-nós">Sobre nós</a>
            <a href="/equipe">Equipe</a>
            <a href="/preciso-de-ajuda">Preciso de Ajuda</a>
          </nav>
        </div>
        <div className="info-right-helping">
          <h6>Como Ajudar</h6>
          <nav>
            <a href="/">Voluntário</a>
            <a href="/">Doações</a>
            <a href="/">Aniversário Solidário</a>
            <a href="/parceiros">Parcerias</a>
          </nav>
        </div>
        <div className="info-right-contact">
          <h6>Contato</h6>
          <nav>
            <a href="mailto:contato@paisafetivos.org" style={{ display: "flex" }}>
              <MailIcon /> contato@paisafetivos.org  
            </a>
            <div>
              <a
                href="https://www.facebook.com/paisafetivosdobrasil"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="imagem logo facebook" />
              </a>
              <a
                href="https://t.me/AtendimentoGrupoCPB"
                target="_blank"
                rel="noreferrer"
                >
                <img src={telegram} alt="imagem logo telegram" />
              </a>
              <a
                href="https://www.instagram.com/paisafetivos/?hl=pt"
                target="_blank"
                rel="noreferrer"
                >
                <img src={instagram} alt="imagem logo instagram" />
              </a>
              <a
                href="https://twitter.com/paisafetivos"
                target="_blank"
                rel="noreferrer"
                >
                <img src={twitter} alt="imagem logo twitter" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </Container>
  );
}
