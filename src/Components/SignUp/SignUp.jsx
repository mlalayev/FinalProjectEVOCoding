import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import "./SignUp.css";
import LogoImg from '../../assets/logo.png';
import { FaRegSmileBeam } from "react-icons/fa";
import { PiSmileySad } from "react-icons/pi";

const isPasswordWeak = (password) => {
  if (password.length < 8) return true;

  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return !(hasLowerCase && hasUpperCase && hasDigit && hasSpecialChar);
};

const SignUp = () => {
  const { t } = useTranslation();
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [passwordType, setPasswordType] = useState('password');
  const [regPasswordType, setRegPasswordType] = useState('password');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || '');
  const [regPassword, setRegPassword] = useState('');
  const [isWeakPassword, setIsWeakPassword] = useState(false);

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

  const handleRegPasswordChange = (e) => {
    const newPassword = e.target.value;
    setRegPassword(newPassword);
    setIsWeakPassword(isPasswordWeak(newPassword));
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
                placeholder={t('becomeateacher.loginputone')}
                required
                maxLength={15}
              />
            </div>
            <div className="input-field">
              <i><FaEnvelope /></i>
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
                placeholder={t('becomeateacher.loginputtwo')}
                id="id_reg"
                required
                maxLength={15}
                value={regPassword}
                onChange={handleRegPasswordChange}
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
            {isWeakPassword && (
              <p className="password-warning weak">{t('becomeateacher.weakpass')}<PiSmileySad /></p>
            )}
            {!isWeakPassword && regPassword.length > 0 && (
              <p className="password-warning strong">{t('becomeateacher.strongpass')} <FaRegSmileBeam /></p>
            )}
            <input
              type="submit"
              value={t('becomeateacher.createacc')}
              className="btn solid"
            />
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>{t('becomeateacher.havntacc')}</h3>
            <p>{t('becomeateacher.createtitle')}</p>
            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
              {t('becomeateacher.register')}
            </button>
            <a href="/"><button>{t('becomeateacher.backmain')}</button></a>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>{t('becomeateacher.havacc')}</h3>
            <p>{t('becomeateacher.logtitle')}</p>
            <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
              {t('becomeateacher.loginputthree')}
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
