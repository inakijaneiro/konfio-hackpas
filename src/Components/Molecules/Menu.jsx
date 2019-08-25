import React from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends React.Component {
    render(){
        let st = window.location.href.substr(22,12);        
        return(
            <nav className="p-1 mb-1 bg-grey-lighter text-right">
                <span className="pr-1"><NavLink exact activeClassName="active" to="/">Home</NavLink></span>
                <span className="pr-1"><NavLink activeClassName="active" to={`/${st}/salud`}>Salud</NavLink></span>
                <span><NavLink activeClassName="active" to={`/${st}/historial`}>Historial</NavLink></span>
            </nav>
        )
    }
}

export default Menu;