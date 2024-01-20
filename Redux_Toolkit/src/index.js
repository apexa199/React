import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Counter from './counter/Counter';
import store from './store/store';
import Post from './posts/Post';
import UserInfo from './user/userInfo';
import VideoPlayer from './Video/VideoPlayer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>

    <UserInfo/>

    </Provider>
  </React.StrictMode>
);


reportWebVitals();
