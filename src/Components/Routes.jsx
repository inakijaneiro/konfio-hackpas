import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Health from './Pages/Health';
import History from './Pages/History';
import Home from './Pages/Home';
import Menu from './Molecules/Menu';

const Routes = ({ match }) => (
    <Router>
        <Menu />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:id/salud/" exact component={Health} />
            <Route path="/:id/historial" exact component={History} />
            {/* <Route path="/cursos/:id" component={Course} /> */}
            {/* <Route path="/cursos" component={Courses} />
            <Route path="/formulario" component={() => <Form name="Página de contacto" />} />
            <Route path="/historial" component={History} />
            <Route path="/usuarios" component={Users} /> */}
            <Route component={() => (
                <div className="ed-grid">
                    <h1>Página no encontrada :(</h1>
                    <span>Komenasai</span>
                </div>
            )} />
        </Switch>
    </Router>
)

export default Routes;