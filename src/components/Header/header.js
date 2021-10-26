import { Container, DropDown } from "../../style/headerStyle";

import logo from "../../assets/logo-header.png";

import whatsapp from "../../assets/whatsapp-icon.png";
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
      </div>
      <nav>
        <DropDown>
          <ul>
            <li>
              <a href="/">
                Sobre nós
                <img src={arrow} alt="seta menu drop-down" />
              </a>
              <ul>
                <li>
                  <a href="#como-funciona">Como Funciona</a>
                </li>
                <li>
                  <a href="#preciso-ajuda">Preciso de Ajuda</a>
                </li>
                <li>
                  <a href="#quem-somos">Nossa Equipe</a>
                </li>
                <li>
                  <a href="/">Trânsparencia</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Como ajudar</a>
            </li>
            <li>
              <a href="/">Parceiros</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
          </ul>
        </DropDown>
      </nav>
      <div className="social">
        <a href="http://wa.me/551145599550" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="logo com direcionamento para o whatsapp" />
        </a>
        <a
          href="https://www.facebook.com/paisafetivosdobrasil"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="logo com direcionamento para o facebook" />
        </a>
        <a
          href="https://t.me/ongpaisafetivosdobrasil"
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
