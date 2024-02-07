import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import BenefitsInfo from './BenefitsInfo';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Simulação de login bem-sucedido
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <Header />
      
      <main>
        {isLoggedIn && <ProductList />}
        <BenefitsInfo /> {/* Adicione o componente BenefitsInfo aqui */}
      </main>

      <footer>
        <p>&copy; 2024 Green Connect. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;