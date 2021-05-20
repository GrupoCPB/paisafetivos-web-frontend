import React from 'react';
import { Helmet } from "react-helmet";

//styled components
import { Donate } from './donate';
import { About } from './about';
import { Helping } from './helping';
import { Works } from "./works"; 
import { Blog } from './blog';
import { Brand } from './brand';

//imagens
import flecha from '../../assets/flecha-direita.png';
import flecha2 from '../../assets/flecha-branca-direita.png';
import ajuda from '../../assets/ajuda-icon.png';
import acolhimento from '../../assets/acolhimento-icon.png';
import lar from '../../assets/lar-afetivo-icon.png';
import acompanhamento from '../../assets/acompanhamento-icon.png';

import logocpb from '../../assets/logo-cpb.png';
import logoLGBT from '../../assets/logoLGBT.png';
import forum from '../../assets/forumempresas.png';
import eternamente from '../../assets/eternamente.png';
import advogados from '../../assets/advogados.png';
import atados from '../../assets/atados.png';
import probono from '../../assets/probono.png';
import { Container } from './reset';



export function Home (){
    return(
        <Container>
            <Helmet title="Pais Afetivos | Home" />
            <Donate>
                <div className="donate-left">
                    <h1>Conectando <br/>pessoas<br/> maravilhosas</h1>
                    <p>Atuamos desde 2009 acolhendo pessoas LGBTQ+ que são vítimas de violência. Nos ajude a transformar a vida dessas pessoas.</p>
                    <a href="#">Faça sua doação</a>
                </div>
                <div className="donate-right">
                    <div className="background"></div>
                </div>
            </Donate>
            <About>
                <div className="about-photo">
                    
                </div>
                <div className="about-area">
                    <h2>Quem somos</h2>
                    <div className="about-area-text">
                        <p>
                            A PaisAfetivos é uma organização sem fins lucrativos que atua por redes de contatos televirtuais em todo o Brasil. Viabilizamos apoiar e acolher pessoas que tenham seus direitos fundamentais violados por conta de preconceitos.                        
                        </p>
                        <div className="about-link">
                            <a href="#">Saiba mais  <img src={flecha}/></a>
                        </div>
                    </div>
                </div>                
            </About>
            <Helping>                
                <div className="helping-area">
                    <h2>Preciso de Ajuda</h2>
                    <div className="helping-area-text">
                        <p>
                            Se você está passando por algum tipo de violência, estamos aqui para te apoiar.  A PaisAfetivos compreende a emergência das questões violadoras de dignidade humana, principalmente da população LGBTQ+ e por isso  contamos com uma equipe multidisciplinar para atender você.                       
                        </p>
                        <div className="helping-link">
                            <a href="#">Saiba mais  <img src={flecha}/></a>
                        </div>
                    </div>
                </div>    
                <div className="helping-photo">
                    
                </div>                   
            </Helping>
            <Works>
                <h2>Como Funciona</h2>
                <div className="works-cards">
                    <div className="works-card">
                        <img src={ajuda} alt="icone pedido de ajuda"/>
                        <h6>Pedido de ajuda</h6>
                        <p className="works-card-text">
                            Nossa equipe de atendimento receberá seu contato e te encaminhará para a equipe multidisciplinar.
                        </p>
                    </div>
                    <div className="works-card">
                        <img src={acolhimento} alt="icone acolhimento"/>
                        <h6>Acolhimento</h6>
                        <p className="works-card-text">
                            Nossa equipe multidisciplinar atenderá a demanda e trabalhará de acordo com a necessidade de cada atendido.
                        </p>
                    </div>
                    <div className="works-card">
                        <img src={lar} alt="icone lar afetivo"/>
                        <h6>Lar Afetivo</h6>
                        <p className="works-card-text">
                            Se necessário, nossa pessoa acolhida é direcionada a um  Lar Afetivo ou uma Casa de Acolhimento (ONG).
                        </p>
                    </div>
                    <div className="works-card">
                        <img src={acompanhamento} alt="icone acompanhamento"/>
                        <h6>Acompanhamento</h6>
                        <p className="works-card-text">
                            A Equipe Multidisciplinar da PaisAfetivos acompanha as demandas do início ao fim, realizando acompanhamento contínuo.
                        </p>
                    </div>
                </div>
            </Works>
            <Blog>
                <h2>Acompanhe nosso blog</h2>
                <div className="blog-notice-area">
                    <div className="notice notice-photo-1">
                        <div className="notice--info">
                            Notícias da semana, notícias da semana 
                        </div>
                    </div>
                    <div className="notice notice-photo-2">
                        <div className="notice--info">
                           Notícias da semana, notícias da semana  
                        </div>
                    </div>
                    <div className="notice notice-photo-3">
                        <div className="notice--info">
                           Notícias da semana, notícias da semana  
                        </div>
                    </div>
                    <div className="notice notice-photo-4">
                        <div className="notice--info">
                            Notícias da semana, notícias da semana 
                        </div>
                    </div>
                </div>
                <div className="blog">
                    <a href="">Acesse o Blog <img src={flecha2} alt="icone de flecha" /> </a>
                </div>
            </Blog>
            <Brand>
                <img src={logocpb} alt=""/>
                <img src={logoLGBT} alt=""/>
                <img src={forum} alt=""/>
                <img src={eternamente} alt=""/>
                <img src={advogados} alt=""/>
                <img src={atados} alt=""/>
                <img src={probono} alt=""/>
            </Brand>
        </Container>
    );
}