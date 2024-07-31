import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import "./SignUp.css";
import LogoImg from '../../assets/logo.png'

const SignUp = () => {
  const { t } = useTranslation();
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
            <img src={LogoImg} alt="" />
            <div className="input-field">
            <i><FaUser /></i>
              <input
                type="text"
                name="usuario"
                autoComplete="username"
                placeholder={t('becomeateacher.loginputone')}
                required
              />
            </div>
            <div className="input-field">
            <i><FaLock /></i>
              <input
                type={passwordType}
                name="contraseña"
                autoComplete="current-password"
                placeholder={t('becomeateacher.loginputtwo')}
                id="id_password"
                required
              />
              {passwordType === 'text' ? (
                <i><FaEyeSlash
                  id="togglePassword"
                  onClick={handlePasswordToggle}
                  style={{ cursor: 'pointer' }}
                /></i>
              ) : (
                <i><FaEye
                  id="togglePassword"
                  onClick={handlePasswordToggle}
                  style={{ cursor: 'pointer' }}
                /></i>
              )}
            </div>
            <a className="pass" href="#">
              {t('becomeateacher.forgotpassword')}
            </a>
            <input type="submit" value={t('becomeateacher.loginputthree')} className="btn solid" />
          </form>
          <form className="sign-up-form">
            <img src={LogoImg} alt="" />
            <div className="input-field">
              <i><FaUser /></i>
              <input
                type="text"
                name="usuario"
                autoComplete="username"
                placeholder="Username"
                required
              />
            </div>
            <div className="input-field">
             <i> <FaEnvelope /></i>
              <input
                type="email"
                name="correo"
                autoComplete="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="input-field">
              <i><FaLock /></i>
              <input
                type={regPasswordType}
                name="contraseña"
                autoComplete="current-password"
                placeholder="Password"
                id="id_reg"
                required
              />
              {regPasswordType === 'text' ? (
                <i><FaEyeSlash
                  id="toggleReg"
                  onClick={handleRegPasswordToggle}
                  style={{ cursor: 'pointer' }}
                /></i>
              ) : (
                <i><FaEye
                  id="toggleReg"
                  onClick={handleRegPasswordToggle}
                  style={{ cursor: 'pointer' }}
                /></i>
              )}
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
