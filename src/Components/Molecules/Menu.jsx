import React from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        const url = window.location.pathname.substr(1,12);
        return (
            <nav className="p-1 mb-1 bg-grey-lighter text-right">
                <span className="pr-1"><NavLink exact activeClassName="active" to="/">Inicio</NavLink></span>
                <span className="pr-1"><NavLink activeClassName="active" to={`/${url}/salud`}>Salud</NavLink></span>
                {/* <span className="pr-1"><NavLink activeClassName="active" to={`/${st}/salud`}>Salud</NavLink></span> */}
                {/* <span><NavLink activeClassName="active" to={`/${st}/historial`}>Historial</NavLink></span> */}
                <span><NavLink activeClassName="active" to={`/${url}/historial`}>Top</NavLink></span>
            </nav>
        )
    }
}

export default Menu;