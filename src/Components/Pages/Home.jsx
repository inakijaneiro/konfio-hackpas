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


const keys = Object.keys(Clientes[0]);

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            client: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/')
            .then(response => {
                this.setState({
                    client: response.data,
                })
            });
    }

    render() {
        return (
            <>
                <main className={`p-0-5 bg-grey-lightest h-full`}>
                    <PageTitle text={`Tu salud financiera`} color={`black`} />
                    <SideNote text={`Último cuarto financiero`} color={`grey-light`} />
                    <div className={`flex flex-wrap`}>
                        <CardNumber amount={1903123} text={`Ventas`} bg={`green`} color={`black`} classes={`w-1/2`} hover={`green-dark`} />
                        <CardNumber amount={12313} text={`Gastos`} bg={`purple`} color={`white`} classes={`w-1/2`} hover={`purple-dark`} />
                        <CardNumber amount={211509} text={`Ganancias`} bg={`white`} color={`black`} classes={`w-full sm-up:w-1/2`} hover={`grey-lighter`} />
                        <CardNumber amount={123123123} text={`Gasto Mayor`} bg={`yellow`} color={`black`} classes={`w-full sm-up:w-1/2`} hover={`yellow-light`} />
                    </div>
                    <Subtitle text={`Tus mejores clientes`} color={`black`} />
                    <div className="overflow-x-auto card card-shadow mb-1 bg-white sm-up:table">
                        <table>
                            <thead> 
                                <Row cells={keys}/>
                            </thead>
                            <tbody>
                            {
                                Clientes.map((cliente, index) => (
                                    <Row key={index} cells={cliente}/>
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