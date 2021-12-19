import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Eliminar from './components/Eliminar.jsx';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { HashRouter } from 'react-router-dom';

//"start": "webpack serve --open",

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/Dashboard" element={<Dashboard/>} />
                <Route path="/Register" element={<Register/>} />
                <Route path="/Login" element={<Login/>} />
            </Routes>
        </Router>
    </React.StrictMode>,

    document.getElementById('app')
);

