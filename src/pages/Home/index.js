import React from 'react';
import { Helmet } from "react-helmet";

import { Container } from "./home.module";


import flecha from '../../assets/flecha-direita.png';

export function Home (){
    return(
        <Container>
            <Helmet title="Pais Afetivos | Home" />
            <div className="section-donate">
                <div className="donate-left">
                    <h1>Conectando <br/>pessoas<br/> maravilhosas</h1>
                    <p>Atuamos desde 2009 acolhendo pessoas LGBTQ+ que são vítimas de violência. Nos ajude a transformar a vida dessas pessoas.</p>
                    <a href="#">Faça sua doação</a>
                </div>
                <div className="donate-right">
                    <div className="background"></div>
                </div>
            </div>
            <main className="about">
                <div className="about-photo">
                    
                </div>
                <div className="about-area">
                    <h2>Quem somos</h2>
                    <div className="about-area-text">
                        <p>
                            A PaisAfetivos é uma organização sem fins lucrativos que atua por redes de contatos televirtuais em todo o Brasil. Viabilizamos apoiar e acolher pessoas que tenham seus direitos fundamentais violados por conta de preconceitos.                        
                        </p>
                        <div className="about-link">
                            <a href="#">Saiba mais <img src={flecha}/></a>
                        </div>
                    </div>
                </div>                
            </main>
        </Container>
    );
}