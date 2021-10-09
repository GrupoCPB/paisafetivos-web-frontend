import { Container } from "../../style/header";

import logo from '../../assets/logo-header.png';

import whatsapp from '../../assets/whatsapp-icon.png';
import facebook from '../../assets/facebook-icon.png';
import telegram from '../../assets/telegram-icon.png';
import instagram from '../../assets/instagram-icon.png';
import twitter from '../../assets/twitter-icon.png';

export function Header(){
  return(
    <Container>
      <div className="logo">
        <img src={logo} alt="logo ong pais afetivos" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Sobre nós</a>
            <ul>
              <li><a href="#">Como Funciona</a></li>
              <li><a href="#">Preciso de Ajuda</a></li>
              <li><a href="#">Nossa Equipe</a></li>
              <li><a href="#">Trânsparencia</a></li>

            </ul>
          </li>
            <li><a href="#">Como ajudar</a></li>
            <li><a href="#">Parceiros</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
      </nav>
      <div className="social">
        <a href="#"><img src={whatsapp} alt="logo com direcionamento para o whatsapp"/></a>
        <a href="#"><img src={facebook} alt="logo com direcionamento para o facebook"/></a>
        <a href="#"><img src={telegram} alt="logo com direcionamento para o telegram"/></a>
        <a href="#"><img src={instagram} alt="logo com direcionamento para o instagram"/></a>
        <a href="#"><img src={twitter} alt="logo com direcionamento para o twitter"/></a>
      </div>
    </Container>
  );
}