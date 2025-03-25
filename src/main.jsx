import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TermsOfServicePage from './pages/Terms/index';
import PrivacyPolicyPage from './pages/index'; // Assumindo que você manteve este caminho
import HomePage from './pages/index'; // Ou o caminho para o seu componente de página inicial

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Rota para a página inicial */}
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);