import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import './styles/styles.scss';
import CssBaseline from '@mui/material/CssBaseline'
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import IntlProviderWrapper from "./hoc/IntlProviderWrapper";

import { Provider } from 'react-redux';
import reduxStore, { persistor } from './redux';

const renderApp = () => {
    ReactDOM.render(
        //theme={theme}
        <Provider store={reduxStore} >
            <IntlProviderWrapper >
                <CssBaseline />
                <App persistor={persistor} />
            </IntlProviderWrapper>
        </Provider>,
        document.getElementById('root')
    );
};

renderApp();
serviceWorker.unregister();
