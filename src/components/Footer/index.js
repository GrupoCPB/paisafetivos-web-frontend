import { Container } from "./footer";

import logo from '../../assets/logo-footer.png';

import whatsapp from '../../assets/whatsapp-branco-icon.png';
import facebook from '../../assets/facebook-branco-icon.png';
import telegram from '../../assets/telegram-branco-icon.png';
import instagram from '../../assets/instagram-branco-icon.png';
import twitter from '../../assets/twitter-branco-icon.png';

import email from '../../assets/email-branco-icon.png';


export function Footer(){
    return(
        <Container>
            <div className="info-left">
                <img src={logo} alt="logo Pais Afetivos"/>
                <p>
                    Organização sem fins lucrativos que atua por redes de contatos televirtuais em todo o Brasil, apoiando e acolhendo vítimas de violência.
                </p>
                <nav>
                    <a href="#"><img src={whatsapp}  alt="imagem logo whatsapp" /></a>
                    <a href="#"><img src={facebook}  alt="imagem logo facebook"/></a>
                    <a href="#"><img src={telegram}  alt="imagem logo telegram"/></a>
                    <a href="#"><img src={instagram} alt="imagem logo instagram" /></a>
                    <a href="#"><img src={twitter}  alt="imagem logo twitter"/></a>
                </nav>
            </div>
            <div className="info-right">
                <div className="info-right-pages" >
                    <h6>Pais Afetivos</h6>
                    <nav>
                        <a href="" >Sobre nós</a>
                        <a href="" >Blog</a>
                        <a href="" >Equipe</a>
                        <a href="" >Preciso de Ajuda</a>
                    </nav>
                </div>
                <div class="info-right-helping">
                    <h6>Como Ajudar</h6>
                    <nav>
                        <a href="" >Acolhedor Solidário</a>
                        <a href="" >Voluntário</a>
                        <a href="" >Doações</a>
                        <a href="" >Aniversário Solidário</a>
                        <a href="" >Parcerias</a>
                    </nav>
                </div>
                <div class="info-right-contact">
                    <h6>Contato</h6>
                    <nav>
                        <a href="" > <img src={email} alt="" />contato@paisafetivos.org</a>
                        <a href="" > <img src={whatsapp} alt="" />(11) 4559-9550</a>
                    </nav>
                </div>
            </div>
        </Container>
    );
}