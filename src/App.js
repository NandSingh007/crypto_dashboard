// import logo from './logo.svg';
import './styles/styles.css';
import React from 'react';
import './App.css';
import Home from './Component/Home';
import Header from './Component/Header'
import { Provider } from 'react-redux';
import store from '../src/ReactReduxStore/Store'; // Import your Redux store

function App() {
    return (
        <Provider store={store}>
            <Header/>
           <Home/>
        </Provider>
    );
}

export default App;
