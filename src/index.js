import React from "react";
import ReactDOM from "react-dom";
import App from './components/app.js';
import {BrowserRouter} from 'react-router-dom';
import "./components/index.css";

const Index =()=>{
    return(
        <>
            <BrowserRouter>
            <App/>
            </BrowserRouter>
        </>
    )
}

ReactDOM.render(<Index/>, document.getElementById('root'));























