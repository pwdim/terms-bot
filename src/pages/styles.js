import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const Container = styled.div`
  padding: 30px;
  max-width: 900px;
  margin: 30px auto;
  background: linear-gradient(315deg, #121314, #1a1b1c, #242526, #2e2f30);
  background-size: 800% 800%;
  animation: ${gradientAnimation} 15s ease infinite;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  color: #eee;
  display: flex; /* Para alinhar o conteúdo do footer */
  flex-direction: column; /* Para organizar os itens do footer verticalmente */
  justify-content: center; /* Centralizar o conteúdo verticalmente */
  align-items: center; /* Centralizar o conteúdo horizontalmente */
`;

export const Title = styled.h1`
  color: #ddd;
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Section = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const SectionTitle = styled.h2`
  color: #ccc;
  margin-top: 0;
  margin-bottom: 15px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 8px;
  font-size: 1.8em;
`;

export const Paragraph = styled.p`
  color: #bbb;
  line-height: 1.7;
  margin-bottom: 15px;
  font-size: 1.1em;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Footer = styled.footer`
  margin-top: 40px;
  padding: 20px 0;
  text-align: center;
  color: #999;
  font-size: 0.9em;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;