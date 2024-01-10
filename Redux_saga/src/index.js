import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './components/Counter';
import UserData from './components/UserData';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import Display from './components/Display';
import { Button1 } from './components/Button1';
import { TutorailDisplay } from './components/TutorailDisplay';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>

    <TutorailDisplay />
{/* 
  <Button1>this is my children props</Button1> */}

    </Provider>

  </React.StrictMode>
);


reportWebVitals();
