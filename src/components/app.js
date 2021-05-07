import React from 'react';
import Home from './home';
import About from './about';
import Contact from './contact';
import Header from './header';
import Profile from './profile';
import { Route, Switch } from 'react-router-dom';




function App(){
    return(

        <>
        <Header/>
        <Menu/>
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