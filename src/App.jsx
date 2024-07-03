import React from 'react'
import MainPage from './Components/MainPage/MainPage.jsx'
import { I18nextProvider } from 'react-i18next';
import i18n from './Components/I18N/I18N.jsx';

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <MainPage />
      </I18nextProvider>
    </>
  )
}

export default App