import { Container, DropDown } from "../../style/headerStyle";

import logo from "../../assets/logo-pais-afetivos.png";

import facebook from "../../assets/facebook-icon.png";
import telegram from "../../assets/telegram-icon.png";
import instagram from "../../assets/instagram-icon.png";
import twitter from "../../assets/twitter-icon.png";
import arrow from "../../assets/arrow-angle-white.png";

export function Header() {
  return (
    <Container>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo ong pais afetivos" />
        </a>
        <p>PaisAfetivos</p>
      </div>
      <nav>
        <DropDown>
          <ul>
            <li>
              <a href="/sobre">
                Sobre nós
                <img src={arrow} alt="seta menu drop-down" />
              </a>
              <ul>
                <li>
                  <a href="#como-funciona">Como Funciona</a>
                </li>
                <li>
                  <a href="/preciso-de-ajuda">Preciso de Ajuda</a>
                </li>
                <li>
                  <a href="/equipe">Nossa Equipe</a>
                </li>

                {/* <li><a href="/">Transpârencia</a></li>
                Posteriormente será construido um portal de trasparência, por isso não escluir esse trecho de código*/}

              </ul>
            </li>
            <li><a href="/como-ajudar">Como ajudar</a></li>
            <li><a href="/parceiros">Parceiros</a></li>

            {/* <li><a href="/">Blog</a></li>
            posteriormente será contruido um blog, por isso não escluir esse trecho de código*/}

            <li><a href="/contato">Contato</a></li>
          </ul>
        </DropDown>
      </nav>
      <div className="social">
        <a
          href="https://www.facebook.com/paisafetivosdobrasil"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="logo com direcionamento para o facebook" />
        </a>
        <a
          href="https://t.me/AtendimentoGrupoCPB"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="logo com direcionamento para o telegram" />
        </a>
        <a
          href="https://www.instagram.com/paisafetivos/?hl=pt"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="logo com direcionamento para o instagram" />
        </a>
        <a
          href="https://twitter.com/paisafetivos"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="logo com direcionamento para o twitter" />
        </a>
      </div>
    </Container>
  );
}
