import React from "react";
import { Helping } from "style/helping";
import flecha from "assets/flecha-direita.png";

export function SectionNeedHelp() {
  return (
    <Helping id="preciso-ajuda">
      <div className="helping-area">
        <h2>Preciso de Ajuda</h2>
        <div className="helping-area-text">
          <p>
            Se você está passando por algum tipo de violência, estamos aqui para
            te apoiar. A PaisAfetivos compreende a emergência das questões
            violadoras de dignidade humana, principalmente da população LGBTQ+ e
            por isso contamos com uma equipe multidisciplinar para atender você.
          </p>
          <div className="helping-link">
            <a href="/preciso-de-ajuda">
              Saiba mais <img src={flecha} alt="imagem de flecha" />
            </a>
          </div>
        </div>
      </div>
      <div className="helping-photo"></div>
    </Helping>
  );
}
