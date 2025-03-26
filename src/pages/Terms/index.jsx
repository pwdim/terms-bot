import React from 'react';
import styled from 'styled-components';
import { Container, Title, Section, SectionTitle, Paragraph, Footer } from './styles';
import { Link } from 'react-router-dom'; // Importe o Link aqui também
import Logo from '/src/assets/logo.png';
import DiscordLogo from '/src/assets/logo.png';

const DiscordButton = styled.a`

  position: fixed;

  bottom: 20px;

  right: 20px;

  background-color: #7289da; /* Cor padrão do Discord */

  color: #fff;

  padding: 10px 15px;

  border-radius: 8px;

  text-decoration: none;

  font-weight: bold;

  display: flex;

  align-items: center;

  gap: 8px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  transition: background-color 0.3s ease;


  &:hover {

    background-color: #677bc4;

  }


  img {

    height: 24px;

  }

`;


function TermsOfServicePage() {
  const discordInviteLink = 'https://discord.gg/BrsFhGnZT4';

  return (
    <Container>
      <Title>Termos de Serviço - FlameMC Stats Bot</Title>

      <Section>
        <SectionTitle>1. Aceitação dos Termos</SectionTitle>
        <Paragraph>
          Ao acessar e utilizar o bot de Discord FlameMC Stats (doravante denominado "o Bot"), o usuário declara sua irrestrita concordância com os presentes Termos de Serviço. Caso não haja concordância com quaisquer das disposições aqui apresentadas, a utilização do Bot não deverá ser efetuada.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. Da Descrição do Serviço</SectionTitle>
        <Paragraph>
          O FlameMC Stats Bot configura-se como uma ferramenta independente, não possuindo qualquer vínculo de natureza oficial com o servidor FlameMC. Sua funcionalidade reside na utilização da interface de programação de aplicações (API) pública disponibilizada por este último.
        </Paragraph>
        <Paragraph>
          Destarte, cumpre salientar que a integralidade das informações veiculadas por meio da referida API é de propriedade exclusiva do FlameMC, cabendo ao Bot tão somente a sua exibição.
        </Paragraph>
        <Paragraph>
          Ademais, o Bot poderá apresentar hiperlinks direcionando a sítios eletrônicos de terceiros, sobre os quais esta plataforma não detém qualquer controle ou responsabilidade. Incumbe ao usuário a diligência necessária para a proteção de sua integridade digital, eximindo-se os desenvolvedores de qualquer responsabilidade, seja ela direta ou indireta, relativamente a danos ou prejuízos advindos do acesso ou da utilização de tais sítios.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. Da Conduta do Usuário</SectionTitle>
        <Paragraph>
          A utilização do Bot é facultada em servidores da plataforma Discord nos quais o usuário possua a devida participação e onde o Bot tenha sido devidamente integrado. O uso da ferramenta deverá pautar-se pela responsabilidade e pelo respeito, em estrita observância às diretrizes estabelecidas pelo Discord e à legislação vigente.
        </Paragraph>
        <Paragraph>
          Repudia-se veementemente a utilização do Bot para quaisquer fins que se revelem maliciosos, incluindo, mas não se limitando à coleta indevida de informações, à prática de assédio, à propagação de conteúdo ilícito ou a quaisquer atividades que contravenham as políticas do Discord ou outras normas regulamentadoras. O usuário compromete-se, outrossim, a não empregar o Bot de maneira a comprometer o seu funcionamento ou a disponibilidade da API do FlameMC.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. Das Restrições de Uso</SectionTitle>
        <Paragraph>
          Ao utilizar o FlameMC Stats Bot, o usuário reconhece e concorda com as seguintes estipulações concernentes à sua utilização:
        </Paragraph>
        <Paragraph>
          É estritamente proibida a automação do uso do Bot, bem como qualquer forma de utilização inadequada que inclua, mas não se limite a, spam e o abuso de comandos. O Bot deve ser utilizado de maneira manual e respeitosa.
        </Paragraph>
        <Paragraph>
          Ademais, o usuário concorda em não utilizar a imagem, o nome ou qualquer representação visual do FlameMC Stats Bot de maneira que possa prejudicar a marca, outros usuários ou o próprio Bot. Qualquer uso da identidade visual do Bot deve ser feito de forma ética e responsável.
        </Paragraph>
        <Paragraph>
          Outrossim, o usuário obriga-se a não realizar quaisquer tentativas de exploração de vulnerabilidades ou utilização do FlameMC Stats Bot para fins que não sejam aqueles explicitamente previstos e divulgados.
        </Paragraph>
        <Paragraph>
          É terminantemente proibido infringir os direitos de terceiros, sejam eles de natureza pessoal ou patrimonial, incluindo direitos de propriedade intelectual, por meio da utilização do FlameMC Stats Bot.
        </Paragraph>
        <Paragraph>
          Finalmente, o usuário declara e concorda que a sua interação com o serviço não envolverá o envio de mensagens ou a transmissão de conteúdo de marketing não solicitado que utilize o Bot como meio de divulgação.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Da Isenção de Garantias</SectionTitle>
        <Paragraph>
          O Bot FlameMC Stats é disponibilizado na modalidade "tal como está" e "conforme disponível". Não se concedem quaisquer garantias, sejam elas expressas ou tácitas, incluindo, sem limitação, garantias concernentes à precisão, confiabilidade, disponibilidade, integridade ou adequação a um propósito específico dos dados apresentados, tendo em vista a sua dependência de uma API de titularidade de terceiros.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Da Limitação de Responsabilidade</SectionTitle>
        <Paragraph>
          Em nenhuma hipótese, os desenvolvedores do Bot serão responsabilizados por quaisquer danos de natureza direta, indireta, incidental, especial, consequencial ou punitiva (abrangendo, exemplificativamente, lucros cessantes, perda de dados, de uso, de reputação ou outras perdas intangíveis) que decorram do acesso ou da utilização do Bot, ou da impossibilidade de acesso ou uso. Tal disposição abrange, mas não se limita a, danos oriundos de informações imprecisas ou da indisponibilidade da API do FlameMC ou de sítios eletrônicos de terceiros eventualmente vinculados.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Do Encerramento</SectionTitle>
        <Paragraph>
          Reserva-se o direito de suspender ou de encerrar o acesso ao Bot, a qualquer tempo e sem a necessidade de aviso prévio, por qualquer motivo que se julgue pertinente, incluindo, mas não se limitando à violação dos presentes Termos de Serviço ou a alterações na API do FlameMC que inviabilizem a operação do Bot.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>8. Das Alterações nos Termos</SectionTitle>
        <Paragraph>
          Os presentes Termos de Serviço poderão ser revisados e atualizados periodicamente, sem que haja a obrigatoriedade de notificação prévia. A versão mais recente dos Termos estará permanentemente acessível nesta página. A continuidade da utilização do Bot após a publicação de quaisquer modificações implicará a aceitação tácita dos Termos revisados.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>9. Do Contato</SectionTitle>
        <Paragraph>
        Em caso de dúvidas ou quaisquer preocupações relacionadas à presente Política de Privacidade, o usuário poderá entrar em contato por meio do canal oficial de comunicação do FlameMC Stats Bot na plataforma Discord.        </Paragraph>
      </Section>

      <Footer>
        <div>
          {Logo && <img src={Logo} alt="Logo FlameMC" style={{ height: '50px', marginRight: '10px', verticalAlign: 'middle' }} />}
          Desenvolvido por pwdim
        </div>
        <div>
          © 2025 FlameMC Stats Bot. Todos os direitos reservados.
        </div>
        <div>
          <Link to="/privacy">Política de Privacidade</Link> <p></p>
          <Link to="/terms">Termos de Serviço</Link>
        </div>
      </Footer>

      <DiscordButton href={discordInviteLink} target="_blank" rel="noopener noreferrer">
        <img src={DiscordLogo} alt="Discord" />
        Entrar no Discord
      </DiscordButton>
    </Container>
  );
}

export default TermsOfServicePage
