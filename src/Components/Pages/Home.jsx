import React from 'react';
import {BrowserRouter as NavLink, Route} from 'react-router-dom';
import Health from '../Pages/Health';

class Home extends React.Component {

    render() {
        return (
            <>
                <h1 className="h1">Esto es el Home</h1>
                <ul>
                    <li className="anchor"><NavLink to='/JXA0004269K9'><a href="/JXA0004269K9/salud">Usuario 1</a></NavLink></li>
                    <li className="anchor"><NavLink to='/PST1205156S0'><a href="/PST1205156S0/salud">Usuario 2</a></NavLink></li>
                    <li className="anchor"><NavLink to='/TAF100112H1A'><a href="/TAF100112H1A/salud">Usuario 3</a></NavLink></li>
                </ul>
                <Route path='/:id/salud' component={Health}/>
            </>
        )
    }
}

export default Home;