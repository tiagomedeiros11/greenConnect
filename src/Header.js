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
  const [signupUser, setSignupUser] = useState(''); // Adiciona estado para o nome de usuário

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
  }; // Adiciona função para atualizar o estado do nome de usuário

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Ainda falta adicionar regra de login
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      first_name: signupFirstName,
      last_name: signupLastName,
      email: signupEmail,
      username: signupUser,
      password: signupPassword
    };

    try {
      const response = await fetch('http://38.242.136.106:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });

      if (response.ok) {
        alert('Usuário cadastrado com sucesso!');
        setSignupFirstName('');
        setSignupLastName('');
        setSignupEmail('');
        setSignupPassword('');
        setSignupUser('');

        // Faz a requisição para o endpoint de login após o cadastro bem-sucedido
        const loginResponse = await fetch('http://38.242.136.106:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: newUser.username,
            password: newUser.password
          })
        });

        if (loginResponse.ok) {
          alert('Login bem-sucedido!');
          // Faça o que for necessário após o login bem-sucedido
        } else {
          alert('Usuario ou senha inválido', loginResponse.statusText);
        }
      } else {
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
                <input type="text" placeholder="First name" value={signupFirstName} onChange={handleSignupFirstNameChange} />
                <input type="text" placeholder="Last name" value={signupLastName} onChange={handleSignupLastNameChange} />
                <input type="text" placeholder="User Name" value={signupUser} onChange={handleSignupUserChange} />
                <input type="email" placeholder="Email" value={signupEmail} onChange={handleSignupEmailChange} />
                <input type="password" placeholder="Password" value={signupPassword} onChange={handleSignupPasswordChange} />
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
