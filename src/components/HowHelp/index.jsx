import helpImg from 'assets/ajuda-imagem.png'
import flag from 'assets/flag-icon.png'
// import arrow from 'assets/flecha-direita.png'

import { Typography } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


//deixar só a imagem da bandeira como componente estático

const Topics = (props) => {
  return(
    <div>
        <div>
          <img src={flag} alt="" />
          <div>
            <Typography variant="h4">{props.title}</Typography>
            <a href={props.link}>
              {props.reference} 
              <ArrowRightAltIcon color="secondary" />
            </a>
          </div>
        </div>
        <Typography variant="body1">
          {props.information}
        </Typography>
      </div>
  )
}


export function HowHelpComponent(){
  return (
    <>
      <div>
        <div className="help-initial-text">
          <Typography variant="h4">Como eu posso ajudar</Typography>
          <Typography variant="body1">
            A Pais Afetivos é construída por várias mãos o que a<br/> torna mais do que
            uma instituição de acolhimento para<br/> pessoas LGBTQI+ em situação de abandono, 
            ela é uma<br /> organização de progresso do empoderamento, cultura,<br/> mobilização social
            e sensibilização das questões <br/>de direitos humanos.
          </Typography>
          <p>
            Você pode nos ajudar das seguintes formas:
          </p>
        </div>
        <img src={helpImg} alt="" />
      </div>
      
      <div>
        <Topics
          title='Doações'
          link='/como-ajudar'
          reference='Para doar'
          information='A Pais Afetivos é uma instituição sem fins lucrativos, por isso
          precisamos de pessoas como você para continuarmos nossa missão. Você pode doar 
          qualquer valor, isolado ou mensal, para manutenção e contribuição dos
          projetos da PaisAfetivos, além de roupas e demais elementos que achar prudente.'
        />
        <Topics
          title="Voluntário"
          link="/como-ajudar"
          reference="Seja um voluntário"
          information="Você pode nos ajudar com nosso trabalho a partir do teu
          conhecimento, profissão ou empresa. Como atuamos de forma
          multidisciplinar todo conhecimento é bem vindo. Entre em
          contato conosco pelo botão abaixo e nós te direcionaremos
          para nossas áreas em demanda"
        />
        <Topics
          title="Aniversário Solidário"
          link="/como-ajudar"
          reference='Colabore conosco'
          information="Faça se Aniversário Solidário em qualquer lugar do mundo
          e ajude a #PaisAfetivos
          Você pode sugerir uma ação solidária onde cada um de seus convidados 
          destinaria 10 reais ou mais, para as ações da ong e esta doação 
          simbólica seria uma forma de seus amigos te presentearem em seu aniversário."
        /> 
      </div>
    </>
  )
}