import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

 class Nav extends Component {
    render() {
        return (
            
            <div>
             <header>
                 
                 <NavLink exact to="/">Home</NavLink>
                 <NavLink to="/smurf-form">Add</NavLink>
            </header>
           </div>
           
        )
    }
}
export default Nav;