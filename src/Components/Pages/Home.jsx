import React from 'react';
import {BrowserRouter as Link, Route} from 'react-router-dom';
import Health from '../Pages/Health';

class Home extends React.Component {

    render() {
        return (
            <>
                <h1 className="h1">Esto es el Home</h1>
                <ul>
                    <li className="anchor"><Link to='/JXA0004269K9'>Usuario 1</Link></li>
                    <li className="anchor"><Link to='/PST1205156S0'>Usuario 2</Link></li>
                    <li className="anchor"><Link to='/JXA0004269K9'>Usuario 3</Link></li>
                </ul>
                <Route path='/:id/salud' component={Health}/>
            </>
        )
    }
}

export default Home;