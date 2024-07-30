import React, { useState, useEffect } from 'react'; 
import "./SignUp.css";

const SignUp = () => {
    const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [passwordType, setPasswordType] = useState('password');
  const [regPasswordType, setRegPasswordType] = useState('password');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || '');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handlePasswordToggle = () => {
    setPasswordType(prevType => prevType === 'password' ? 'text' : 'password');
  };

  const handleRegPasswordToggle = () => {
    setRegPasswordType(prevType => prevType === 'password' ? 'text' : 'password');
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  return (
    <div className={`SignUpContainer ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form">
            <h2 className="title">Login Here!..</h2>
            <div className="input-field">
              <i className="fas fa-user" />
              <input
                type="text"
                name="usuario"
                autoComplete="username"
                placeholder="Username"
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input
                type={passwordType}
                name="contraseña"
                autoComplete="current-password"
                placeholder="Password"
                id="id_password"
                required
              />
              <i
                className={`far fa-eye${passwordType === 'text' ? '-slash' : ''}`}
                id="togglePassword"
                onClick={handlePasswordToggle}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <a className="pass" href="#">
              Forgot your password?
            </a>
            <input type="submit" value="Sign in" className="btn solid" />
          </form>
          <form className="sign-up-form">
            <h2 className="title">Register Now!..</h2>
            <div className="input-field">
              <i className="fas fa-user" />
              <input
                type="text"
                name="usuario"
                autoComplete="username"
                placeholder="Username"
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope" />
              <input
                type="email"
                name="correo"
                autoComplete="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input
                type={regPasswordType}
                name="contraseña"
                autoComplete="current-password"
                placeholder="Password"
                id="id_reg"
                required
              />
              <i
                className={`far fa-eye${regPasswordType === 'text' ? '-slash' : ''}`}
                id="toggleReg"
                onClick={handleRegPasswordToggle}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <input
              type="submit"
              value="Create account"
              className="btn solid"
            />
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>You don't have an account?</h3>
            <p>Create your account right now to follow people and like publications</p>
            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
              Register
            </button>
            <a href="/"><button>Back Main Page</button></a>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Already have an account?</h3>
            <p>Login to see your notifications and post your favorite photos</p>
            <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
