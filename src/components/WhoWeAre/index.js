import { StyledWhoWeAre } from '../../style/whoweare';
import bandeira from '../../assets/bandeira.png';

export default function WhoWeAre() {
  return (
    <StyledWhoWeAre>
      <img src={bandeira} alt="Bandeira lgbt" />
      <div>
        <h2>Quem somos</h2>
        <p>
          A Pais Afetivos é uma organização sem fins lucrativos que atua por
          redes de contatos televirtuais em todo o Brasil. Viabilizamos apoiar e
          acolher pessoas que tenham seus direitos fundamentais violados por
          conta de preconceitos.
        </p>
        <p>
          Contamos com uma equipe multidisciplinar, composta por voluntários,
          incluindo agentes de atendimento, psicólogos, assistentes sociais,
          advogados, entre outros. <br /> Nosso próximo passo é construir uma
          sede física, disponibilizando de acolhimento emergencial
          principalmente para pessoas LGBTQI+ desabrigadas. Para a realização
          deste Sede que a chamamos de Casa PaisAfetivos, necessitamos da sua
          solidariedade e boa vontade com esta causa.
        </p>
      </div>
    </StyledWhoWeAre>
  );
}
