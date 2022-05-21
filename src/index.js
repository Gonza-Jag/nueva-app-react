
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBbP4b7M5n24kK3mYmS8AczNrka1y_VA8U",
  authDomain: "reactapp-ebf2c.firebaseapp.com",
  projectId: "reactapp-ebf2c",
  storageBucket: "reactapp-ebf2c.appspot.com",
  messagingSenderId: "894492941752",
  appId: "1:894492941752:web:83c601998e4f106dde834d"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
