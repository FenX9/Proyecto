import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Eliminar from './components/Eliminar.jsx';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { HashRouter } from 'react-router-dom';


ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/Login" element={<Login/>} />
            </Routes>
        </HashRouter>
    </React.StrictMode>,

    document.getElementById('app')
);

