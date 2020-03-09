import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/post.css';
import './css/event.css';
import App from './App';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyBtFF_5kvjDbXJSAbLZ9jHyVuT3xw1l7XU",
  authDomain: "vietcode-server.firebaseapp.com",
  databaseURL: "https://vietcode-server.firebaseio.com",
  projectId: "vietcode-server",
  storageBucket: "vietcode-server.appspot.com",
  messagingSenderId: "1051977739181",
  appId: "1:1051977739181:web:feb3d2418444e5ca0e8f24"
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
