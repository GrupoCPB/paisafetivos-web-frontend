import executive from '../../assets/Alessandra-Keiko-Aoki-Diretora-Executiva.png'
import coordinator from '../../assets/Mariana.png'
import director from '../../assets/raphael.png'


export const OurTeam = () => {
  return(
    <>
      <div>
        <h2>Nossa Equipe</h2>
        <br />
        <p>
          Essas são as pessoas responsáveis pela nossa ONG. Além delas, 
          contamos com diversos voluntários nas nossas equipes multidisciplinares, 
          como psicólogos, assistentes sociais, advogados, agentes de atendimento, entre outros.
          <br />
          Se você gostaria de fazer parte de nossa equipe, entre em contato conosco.
        </p>
      </div>
      <div>
        <div>
          <h4>Administrativo</h4>
          <img src={director} alt='foto de Raphael América' />
          <div>
            <p>
              <strong>Raphael América</strong>
              Função: Diretor Geral
              Contrato: Voluntário
              Instagram: @oamericaraphael
            </p>
          </div>
          <img src={executive} alt='foto de Alessandra Keiko' />
          <div>
            <p>
              <strong>Alessandra Keiko</strong>
              Função: Diretora Executiva
              Contrato: Voluntária
              Instagram: @alessandrakeikoaoki
            </p>
          </div>
          <img src={coordinator} alt='foto de Mariana Gidra'/>
          <div>
            <p>
              <strong>Mariana Gidra</strong>
              Função: Coord. Multidisciplinar
              Contrato: Voluntária
              Instagram: @marianagidra
            </p>
          </div>
        </div>
      </div>
    </>
  )
}