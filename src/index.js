import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App';
import "./styles/index.scss";
import { Provider } from "react-redux";
import store from './redux/store';
import ErrorBoundary from './ErrorBoundery/ErorBoundery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <ErrorBoundary>
                <React.StrictMode>
                        <Provider store={store}>
                                <App/>
                        </Provider>
                </React.StrictMode>
        </ErrorBoundary>
);
