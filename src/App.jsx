import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage.jsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './Components/I18N/I18N.jsx';
import Header from './Components/Common/Header/Header.jsx';

function App() {
  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <Switch>
          <Route path="/home">
            <Header />
            <MainPage />
          </Route>
        </Switch>
      </I18nextProvider>
    </Router>
  );
}

export default App;
