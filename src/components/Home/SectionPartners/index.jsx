import React from "react";
import { Brand } from "../../../style/brand";

import logocpb from "../../../assets/logo-cpb.png";
import logoLGBT from "../../../assets/logoLGBT.png";
import forum from "../../../assets/forumempresas.png";
import eternamente from "../../../assets/eternamente.png";
import advogados from "../../../assets/advogados.png";
import atados from "../../../assets/atados.png";
import probono from "../../../assets/probono.png";

function SctionParners() {
  return (
    <>
      <Brand>
        <img src={logocpb} alt="" />
        <img src={logoLGBT} alt="" />
        <img src={forum} alt="" />
        <img src={eternamente} alt="" />
        <img src={advogados} alt="" />
        <img src={atados} alt="" />
        <img src={probono} alt="" />
      </Brand>
    </>
  );
}

export default SctionParners;
