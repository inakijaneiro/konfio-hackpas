import React from 'react';
import './scss/main.scss';
import CardNumber from './Components/Atoms/CardNumber';
import Row from './Components/Atoms/Row';
import Routes from './Components/Routes';

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
    id: 2,
    name: 'Bancomer',
    income: 123123,
    simon: 1132123,
    yasta: "adasdasd"
  },
  {
    id: 2,
    name: 'Bancomer',
    income: 123123,
    simon: 1132123,
    yasta: "adasdasd"
  },
]
const keys = Object.keys(Clientes[0]);

function App() {
  return (

    <Routes/>
    // <div className="">
    //   <CardNumber amount="1903123" text="Ventas" bg="green" color="black" />
    //   <CardNumber amount="12313" text="Gastos" bg="purple" color="white" />
    //   <CardNumber amount="12313" text="Gastos" bg="yellow" color="black" />
    //   <div className="overflow-x-auto card card-shadow mb-1">
    //     <table>
    //       <thead>
    //         {
    //             <Row cells={keys} />
    //         }
    //       </thead>
    //       <tbody>
    //         {
    //           Clientes.map((cliente, index) => (
    //             <Row key={index} cells={cliente} />
    //           ))
    //         }
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
}

export default App;
