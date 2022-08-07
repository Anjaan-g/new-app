import ReactDOM from 'react-dom/client';
import App from 'core/views/containers/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import { store } from './core/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

//Styles import
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './styles/_styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
