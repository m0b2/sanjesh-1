import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import font from './assets/fonts/Vazir.ttf';
import { loadCSS } from 'fg-loadcss';
loadCSS(
    'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
    document.querySelector('#font-awesome-css'),
);
const new_font = new FontFace('Vazir', font)
new_font.load().then(function (loaded_face) {
    // use font here
    document.fonts.add(loaded_face)
}).catch(function (error) {

});
ReactDOM.render(
    <Provider store={store} >
        <HashRouter >
            <App />
        </HashRouter>

    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
