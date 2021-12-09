import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

ReactDOM.render(
    <App>
        <NavBar>
            <Header/>
            <LoginW> 
                <Login/> 
                <Singup/> 
            </LoginW>
        </NavBar>
    </App>,

document.getElementById('app'));

