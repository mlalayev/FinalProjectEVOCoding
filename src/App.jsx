import React from 'react'
import MainPage from './Components/MainPage/MainPage.jsx'
import { I18nextProvider } from 'react-i18next';
import i18n from './Components/I18N/I18N.jsx';
import Header from './Components/Common/Header/Header.jsx';

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Header/>
        <MainPage />
      </I18nextProvider>
    </>
  )
}

export default App