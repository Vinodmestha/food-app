import React from 'react';
import Home from './home.js';
import About from './about.js';
import Contact from './contact.js';
import Header from './header.js';
import Profile from './profile.js';
import { Route, Switch } from 'react-router-dom';

// function App(){
//     return(
        
//     )
// }

function App(){
    return(

        <>
        <Header/>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/about" component={About}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/contact' component={Contact}/>
        </Switch> 
        </>
    )
}

export default App;