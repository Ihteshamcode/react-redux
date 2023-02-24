import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './input.css';
import store from './Store';
import { Provider } from 'react-redux';
store.subscribe(()=>{console.log(store.getState())})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
