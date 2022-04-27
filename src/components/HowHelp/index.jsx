//imagens
import helpImg from "assets/ajuda-imagem.png";

//material-ui
import { Typography } from "@mui/material";

//styled-components
import { HowHelpStyle } from "style/howHelp";

import { ContributionSection } from 'components/ContributionSection'



export function HowHelpComponent() {
  return (
    <HowHelpStyle>
      <div className="help-initial-text">
        <div>
          <Typography variant="h2">Como eu posso ajudar</Typography>
          <Typography variant="body1">
            A Pais Afetivos é construída por várias mãos o que a<br /> torna mais
            do que uma instituição de acolhimento para
            <br /> pessoas LGBTQI+ em situação de abandono, ela é uma
            <br /> organização de progresso do empoderamento, cultura,
            <br /> mobilização social e sensibilização das questões <br />
            de direitos humanos.
          </Typography>
          <br/>
          <Typography variant="body1">
            Você pode nos ajudar das seguintes formas:
          </Typography>
        </div>
        <img src={helpImg} alt="" />
      </div>
      <ContributionSection />
    </HowHelpStyle>
  );
}
