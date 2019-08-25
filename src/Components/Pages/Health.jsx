import React from 'react';
import PageTitle from '../Atoms/PageTitle';
import Subtitle from '../Atoms/Subtitle';
import SideNote from '../Atoms/SideNote';
import CardNumber from '../Atoms/CardNumber';
import Row from '../Atoms/Row';
import axios from 'axios';
import Menu from '../Molecules/Menu';


const Clientes = [
    {
        id: 1,
        name: 'Santander',
        income: 1000000,
        simon: 12312313,
        yasta: "najadasia anaidanas"
    },
    {
        id: 2,
        name: 'Bancomer',
        income: 123123,
        simon: 1132123,
        yasta: "adasdasd"
    },
    {
        id: 3,
        name: 'Banorte',
        income: 15273,
        simon: 46372,
        yasta: "adasdasd"
    },
    {
        id: 4,
        name: 'Banregio',
        income: 9181,
        simon: 126383,
        yasta: "adasdasd"
    },
]

const keys = Object.keys(Clientes[0]);

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ventas: [],
            gastos: []
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;        
        axios.get(`http://localhost:3001/${id}/salud`)
            .then(response => {
                this.setState({
                    ventas: Math.round(response.data.income),
                    gastos: Math.round(response.data.outcome)
                })
            });
    }

    render() {
        return (
            <>
                <main className={`p-0-5 h-full`}>
                    <PageTitle text={`Tu salud financiera`} color={`black`} />
                    <SideNote text={`Último cuarto financiero`} color={`purple`} />
                    <div className={`flex flex-wrap`}>
                        <CardNumber amount={this.state.ventas - this.state.gastos} text={`Ganancias`} bg={`green`} color={`black`} classes={`w-full sm-up:w-1/2`} hover={`green-dark`} />
                        <CardNumber amount={this.state.ventas} text={`Ventas`} bg={`purple-light`} color={`white`} classes={`w-full sm-up:w-1/2`} hover={`purple`} />
                        <CardNumber amount={this.state.gastos} text={`Compras`} bg={`purple-light`} color={`white`} classes={`w-full sm-up:w-1/2`} hover={`purple`} />
                        <CardNumber amount={123123123} text={`Gasto Mayor`} bg={`red-light`} color={`white`} classes={`w-full sm-up:w-1/2`} hover={`red`} />
                    </div>
                    <Subtitle text={`Tus mejores clientes`} color={`black`} />
                    <div className="overflow-x-auto card card-shadow mb-1 bg-white sm-up:table">
                        <table>
                            <thead>
                                <Row cells={keys} />
                            </thead>
                            <tbody>
                                {
                                    Clientes.map((cliente, index) => (
                                        <Row key={index} cells={cliente} />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </main>
            </>
        )
    }
}

export default Home;