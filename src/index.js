import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18n from './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// // src/App.js
// import React from 'react';
// import { useTranslation } from 'react-i18next';

// function App() {
//   const { t, i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div>
//       <h1>{t('weather')}</h1>
//       <p>{t('temperature')}: 20°C</p>
//       <p>{t('humidity')}: 80%</p>
//       <button onClick={() => changeLanguage('en')}>English</button>
//       <button onClick={() => changeLanguage('ar')}>Arabic</button>
//     </div>
//   );
// }

// export default App;
