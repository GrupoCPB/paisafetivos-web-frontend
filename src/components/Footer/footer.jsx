import { Container } from "style/footer";

import logo from "assets/logo-footer.png";
// import whatsapp from "assets/whatsapp-branco-icon.png";
import facebook from "assets/facebook-branco-icon.png";
import telegram from "assets/telegram-branco-icon.png";
import instagram from "assets/instagram-branco-icon.png";
import twitter from "assets/twitter-branco-icon.png";

// import email from "assets/email-branco-icon.png";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

export function Footer() {
  return (
    <Container>
      <div className="info-left">
        <img className='info-left-img' src={logo} alt="logo Pais Afetivos" />
        <p>
          Organização sem fins lucrativos que atua por redes de contatos
          televirtuais em todo o Brasil, apoiando e acolhendo vítimas de
          violência.
        </p>
        <nav>
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
        </nav>
      </div>
      <div className="info-right">
        <div className="info-right-pages">
          <h6>Pais Afetivos</h6>
          <nav>
            <a href="/">Sobre nós</a>
            <a href="/">Equipe</a>
            <a href="/preciso-de-ajuda">Preciso de Ajuda</a>
          </nav>
        </div>
        <div class="info-right-helping">
          <h6>Como Ajudar</h6>
          <nav>
            <a href="/">Voluntário</a>
            <a href="/">Doações</a>
            <a href="/">Aniversário Solidário</a>
            <a href="/">Parcerias</a>
          </nav>
        </div>
        <div class="info-right-contact">
          <h6>Contato</h6>
          <nav>
            <a href="mailto:contato@paisafetivos.org">
              <img src={MailOutlinedIcon} alt="" />
              contato@paisafetivos.org
            </a>
          </nav>
        </div>
      </div>
    </Container>
  );
}
