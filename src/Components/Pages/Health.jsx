import React from 'react';
import PageTitle from '../Atoms/PageTitle';
import Subtitle from '../Atoms/Subtitle';
import SideNote from '../Atoms/SideNote';
import CardNumber from '../Atoms/CardNumber';
import Row from '../Atoms/Row';
import axios from 'axios';


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

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ventas: [],
            gastos: [],
            maxin: [],
            maxout: []
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`https://pure-ravine-38602.herokuapp.com/${id}/salud`)
            .then(response => {
                this.setState({
                    ventas: Math.round(response.data.income),
                    gastos: Math.round(response.data.outcome),
                    maxin: Math.round(response.data.maxIncome),
                    maxout: Math.round(response.data.maxOutcome),
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
                        <CardNumber amount={this.state.maxout} text={`Gasto Mayor`} bg={`red-light`} color={`white`} classes={`w-full sm-up:w-1/2`} hover={`red`} />
                    </div>
                </main>
            </>
        )
    }
}

export default Home;