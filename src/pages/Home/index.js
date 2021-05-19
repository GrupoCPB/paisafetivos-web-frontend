import React from 'react';
import { Helmet } from "react-helmet";
import { Container } from "./home.module";

export function Home (){
    return(
        <Container>
            <Helmet title="Pais Afetivos | Home" />
            <div className="section-donate">
                <div className="about-left">
                    <h1>Conectando <br/>pessoas<br/> maravilhosas</h1>
                    <p>Atuamos desde 2009 acolhendo pessoas LGBTQ+ que são vítimas de violência. Nos ajude a transformar a vida dessas pessoas.</p>
                    <a href="#">Faça sua doação</a>
                </div>
                <div className="about-right">
                    <div className="background"></div>
                </div>
            </div>
        </Container>
    );
}