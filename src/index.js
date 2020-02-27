import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// Or Create your Own theme:
const theme = createMuiTheme({
    palette: {
      secondary: {
          main: '#b71c1c'
        }
      }
    },
  )

ReactDOM.render(
    <Provider store={store} >
        <HashRouter >
        <MuiThemeProvider theme={theme}>
            <App />
            </MuiThemeProvider>
        </HashRouter>

    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
