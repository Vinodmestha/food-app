import React from 'react';
import { NavLink } from 'react-router-dom';


function Header(){
    return(<>
        <div className="header-section">
            <div className="logo_name">
            <h3>Online Food App</h3>
            </div> 
            <div className="navbar">
                <div className="ulist">
                    <NavLink exact className="active_class" to="/">Home</NavLink> 
                    <NavLink exact  className="active_class" to="/about">About</NavLink> 
                    <NavLink exact  className="active_class" to="/profile">Profile</NavLink> 
                    <NavLink exact className="active_class" to="/contact"> Contact</NavLink><br/> 
                </div>
        
                
            </div>       
        </div> 
        </>
    )
}
export default Header;