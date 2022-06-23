
import MailBox from "assets/objects.png"

// import { Form } from "components"
import { Display, Couple, H2, Intro } from './styles'



export function ContactPage(){
  return(
    <Display>
      <div>
        <Couple>
          <H2>Queremos te ouvir!</H2>
          <Intro>
            Se voce ainda estiver com alguma dúvida ou necessitar de uma<br/> informação, não deixe de entrar em contato com a gente através<br/> do formulário abaixo ou por uma de nossas redes sociais.
          </Intro>
        </Couple>
        <img src={MailBox} alt="figura de uma caixa de correio com uma carta voando" /> 
      </div>
      <div></div>
      
       
    </Display>
  )
}