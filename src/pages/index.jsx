import React from 'react';
import styled from 'styled-components';
import { Container, Title, Section, SectionTitle, Paragraph, Footer } from './styles';
import { Link } from 'react-router-dom'; // Importe o Link aqui também
import Logo from '/src/assets/logo.png';

function PrivacyPolicyPage() {
  return (
    <Container>
      <Title>Política de Privacidade - FlameMC Stats Bot</Title>

      <Section>
        <SectionTitle>1. Informações que Coletamos</SectionTitle>
        <Paragraph>
          Para o adequado funcionamento e aprimoramento contínuo do FlameMC Stats Bot, procedemos à coleta de informações específicas. Estas incluem o identificador único (ID) e o nome de usuário dos indivíduos que interagem com o Bot por meio da execução de comandos. Adicionalmente, registramos os identificadores das guildas (servidores) e dos canais do Discord onde tais comandos são utilizados, visando contextualizar a utilização do Bot dentro do ambiente da plataforma.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. Uso das Informações</SectionTitle>
        <Paragraph>
          As informações coletadas desempenham um papel crucial no processo de análise e desenvolvimento futuro do FlameMC Stats Bot. Ao rastrear padrões de uso e a interação dos usuários com os comandos, objetivamos identificar áreas de melhoria, implementar novas funcionalidades e otimizar a experiência geral proporcionada pelo Bot.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. Compartilhamento de Informações</SectionTitle>
        <Paragraph>
          O FlameMC Stats Bot opera mediante a utilização da Interface de Programação de Aplicações (API) pública fornecida pelo servidor FlameMC, a qual possibilita a obtenção dos dados necessários para a execução de suas funcionalidades. As informações exibidas pelo Bot são, portanto, derivadas dos dados disponibilizados por essa API, estando, consequentemente, sujeitas à política de privacidade estabelecida pelo FlameMC.
        </Paragraph>
        <Paragraph>
          Em consonância com o compromisso com a privacidade individual, informamos que qualquer usuário que manifeste o desejo de não ter as informações de sua conta exibidas pelo Bot deverá, em primeiro plano, entrar em contato com a administração do servidor oficial do FlameMC para verificar a possibilidade de restringir a divulgação dessas informações por meio da referida API. A capacidade do FlameMC Stats Bot de omitir tais informações está intrinsecamente ligada às opções de privacidade oferecidas pela API do FlameMC.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. Links para Terceiros</SectionTitle>
        <Paragraph>
          O FlameMC Stats Bot, em sua operação, poderá apresentar ligações (links) para sítios eletrônicos pertencentes a terceiros. Cumpre ressaltar que a presente Política de Privacidade restringe-se exclusivamente ao uso do FlameMC Stats Bot, não abrangendo as práticas de privacidade de tais sítios externos. Recomendamos, portanto, que o usuário proceda à leitura atenta das políticas de privacidade de quaisquer sítios de terceiros que venha a visitar, a fim de garantir a proteção de seus dados pessoais.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Segurança</SectionTitle>
        <Paragraph>
          Empregamos medidas de segurança consideradas razoáveis e em conformidade com as melhores práticas da indústria para proteger as informações coletadas contra acessos não autorizados, alterações indevidas, divulgação ou destruição não autorizada. Adicionalmente, reservamo-nos o direito de bloquear o acesso de usuários que venham a violar os presentes termos e/ou que representem um risco potencial à integridade da marca ou à segurança de outros usuários.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Alterações nesta Política de Privacidade</SectionTitle>
        <Paragraph>
          A presente Política de Privacidade poderá ser atualizada periodicamente, visando refletir eventuais alterações nas práticas de coleta e uso de informações ou em decorrência de exigências legais. Quaisquer modificações serão devidamente publicadas nesta página, sendo recomendável que o usuário a revise regularmente para manter-se informado sobre as condições vigentes.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Contato</SectionTitle>
        <Paragraph>
          Em caso de dúvidas ou quaisquer preocupações relacionadas à presente Política de Privacidade, o usuário poderá entrar em contato por meio do canal oficial de comunicação do FlameMC Stats Bot na plataforma Discord.
        </Paragraph>
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
          Consulte a <Link to="/privacy">Política de Privacidade</Link> e os nossos
          <Link to="/terms"> Termos de Serviço</Link>
        </div>
      </Footer>


    </Container>
  );
}

export default PrivacyPolicyPage;