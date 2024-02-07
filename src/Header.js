import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [signupFirstName, setSignupFirstName] = useState('');
  const [signupLastName, setSignupLastName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupUser, setSignupUser] = useState('');

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  const handleSignupClick = () => {
    setShowSignupForm(true);
    setShowLoginForm(false);
  };

  const handleLoginEmailChange = (e) => {
    setLoginEmail(e.target.value);
  };

  const handleLoginPasswordChange = (e) => {
    setLoginPassword(e.target.value);
  };

  const handleSignupFirstNameChange = (e) => {
    setSignupFirstName(e.target.value);
  };

  const handleSignupLastNameChange = (e) => {
    setSignupLastName(e.target.value);
  };

  const handleSignupEmailChange = (e) => {
    setSignupEmail(e.target.value);
  };

  const handleSignupPasswordChange = (e) => {
    setSignupPassword(e.target.value);
  };

  const handleSignupUserChange = (e) => {
    setSignupUser(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Ainda adicionar regrar de login
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    // Criar um objeto com os dados do novo usuário
    const newUser = {
      first_name: signupFirstName,
      last_name: signupLastName,
      email: signupEmail,
      password: signupPassword,
      username: signupUser  // Incluindo o campo do usuário no objeto
    };

    try {
      // Enviar os dados do novo usuário para a API externa
      const response = await fetch('http://38.242.136.106:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });

      if (response.ok) {
        // O usuário foi cadastrado com sucesso
        alert('Usuário cadastrado com sucesso!')
        // Limpar os campos do formulário de cadastro
        setSignupFirstName('');
        setSignupLastName('');
        setSignupEmail('');
        setSignupPassword('');
        setSignupUser('');  // Limpar o campo do usuário

        window.location.href = '/';
      } else {
        // Se a solicitação não foi bem-sucedida, exibir mensagem de erro
        console.error('Erro ao cadastrar usuário:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error.message);
    }
  };

  return (
    <header>
      <a href="/" className="header-link">
        <h1>Green Connect</h1>
      </a>
      <nav>
        <ul className='no-dots'>
          <li>
            {showLoginForm && (
              <form className="login-form" onSubmit={handleLoginSubmit}>
                <input type="email" placeholder="User Name" value={loginEmail} onChange={handleLoginEmailChange} />
                <input type="password" placeholder="Password" value={loginPassword} onChange={handleLoginPasswordChange} />
                <button type="submit">Login</button>
              </form>
            )}
            {showSignupForm && (
              <form className="signup-form" onSubmit={handleSignupSubmit}>
                <input type="text" placeholder="Nome" value={signupFirstName} onChange={handleSignupFirstNameChange} />
                <input type="text" placeholder="Sobrenome" value={signupLastName} onChange={handleSignupLastNameChange} />
                <input type="email" placeholder="Email" value={signupEmail} onChange={handleSignupEmailChange} />
                <input type="password" placeholder="Senha" value={signupPassword} onChange={handleSignupPasswordChange} />
                <input type="text" placeholder="Usuário" value={signupUser} onChange={handleSignupUserChange} /> {/* Novo campo de entrada para o usuário */}
                <button type="submit">Cadastrar</button>
              </form>
            )}
          </li>
          <li>
            {!showLoginForm && !showSignupForm && (
              <button className="login-btn" onClick={handleLoginClick}>Login</button>
            )}
            {!showLoginForm && !showSignupForm && (
              <button className="signup-btn" onClick={handleSignupClick}>Cadastro</button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;