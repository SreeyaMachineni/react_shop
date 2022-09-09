import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './redx/store';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './prac/Context/user.context';
import { ProductContextProvider } from './prac/Context/products.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
                <UserContextProvider>
                        <ProductContextProvider>
                                <App />
                        </ProductContextProvider>
                </UserContextProvider>
        </BrowserRouter>
  
);
