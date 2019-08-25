import React from 'react';
import Menu from '../Molecules/Menu';
import Row from '../Atoms/Row';
import PageTtile from '../Atoms/PageTitle';

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

class History extends React.Component {


    render() {
        return (
            <>
                <Menu />
                <div className="p-0-5">
                    <PageTtile text="Tu historial" />
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
                </div>
            </>
        )
    }
}

export default History;