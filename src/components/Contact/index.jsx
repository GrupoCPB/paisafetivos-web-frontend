import MailBox from "assets/objects.png"

import { Display, Couple, H2, Intro, IMAGE } from './styles'
import * as style from './styles'
import { Form, FormInput, InputMultiline } from "components"
import { Box } from "@mui/material"



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
        <IMAGE src={MailBox} alt="figura de uma caixa de correio com uma carta voando" /> 
      </div>
      <Box
        component="div"
        sx={style.contactForm}
      >
        <Form subject="Entre em Contato!">
          <FormInput
            variant="filled"
            type="text"
            name="Nome"
            placeholder="Nome"
            required={true}
          />
          <FormInput
            variant="filled"
            type='email'
            name="E-mail"
            placeholder="E-mail"
            required={true}
          />
          <FormInput
            variant="filled"
            type="text"
            name="Telefone"
            placeholder="Telefone(opcional)"
          />
          <InputMultiline 
            rows={2}
            placeholder="Escreva uma mensagem"
          />
        </Form>
      </Box>
      
       
    </Display>
  )
}