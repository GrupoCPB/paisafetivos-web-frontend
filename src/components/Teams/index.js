import executive from '../../assets/Alessandra-Keiko-Aoki-Diretora-Executiva.png'
import coordinator from '../../assets/Mariana.png'
import director from '../../assets/raphael.png'
import group from '../../assets/equipe.png'
import { OurTeamStyled } from '../../style/team'


export const OurTeam = () => {
  return(
    <>
      <OurTeamStyled>
        <div>
        <h2>Nossa Equipe</h2>
        <p>
          Essas são as pessoas responsáveis pela nossa ONG. Além delas, <br />
          contamos com diversos voluntários nas nossas equipes <br /> multidisciplinares, 
          como psicólogos, assistentes sociais, advogados, <br /> agentes de atendimento, entre outros.
          <br />
          <br />
          Se você gostaria de fazer parte de nossa equipe, entre em contato conosco.
        </p>
        </div>
        <img src={group} alt='imagem de uma equipe'/>
      </OurTeamStyled>
      <div>
        <div>
          <h4>Administrativo</h4>
          <img src={director} alt='foto de Raphael América' />
            <p>
              <strong>Raphael América</strong>
              Função: Diretor Geral
              Contrato: Voluntário
              Instagram: @oamericaraphael
            </p>

          <img src={executive} alt='foto de Alessandra Keiko' />
            <p>
              <strong>Alessandra Keiko</strong>
              Função: Diretora Executiva
              Contrato: Voluntária
              Instagram: @alessandrakeikoaoki
            </p>

          <img src={coordinator} alt='foto de Mariana Gidra'/>
            <p>
              <strong>Mariana Gidra</strong>
              Função: Coord. Multidisciplinar
              Contrato: Voluntária
              Instagram: @marianagidra
            </p>
        </div>
        <div>
          <h4>Financeiro</h4>
          <img src='' alt='' />
              <p>
              <strong>Fábio Soares</strong>
                Função: Diretor Financeiro
                Contrato: Voluntário
                Instagram: @fabio.soares2005
              </p>
        </div>
        <div>
          <h4>Recursos Humanos</h4>
          <img src='' alt='' />
            <p>
              <strong>Mariana Gidra</strong>
              Função: Coord. de RH
              Contrato: Voluntária
              Instagram: @marianagidra
            </p>
        </div>
        <div>
          <h4>Marketing</h4>
          <img src='' alt='' />
          <p>
            <strong>Julia Leonello</strong>
            Função: Coord. Social Media
            Contrato: Voluntária
            Instagram: @juleonello
          </p>
        </div>
      </div>
    </>
  )
}