import React from 'react';
import Row from '../Atoms/Row';
import PageTtile from '../Atoms/PageTitle';
import axios from 'axios'
import Graph from '../Atoms/Graph';

class History extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            top: [],
            head: [],
            firstYearIncomes: [],
            firstYearOutcomes: []
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`https://pure-ravine-38602.herokuapp.com/${id}/salud`)
            .then(response => {
                this.setState({
                    top: (response.data.top5[0]),
                    head: (response.data.top5[0][0]),
                })
            });
        axios.get(`https://pure-ravine-38602.herokuapp.com/${id}/historial`)
            .then(response => {
                this.setState({
                    firstYearIncomes: response.data.firstYearIncomes,
                    firstYearOutcomes: response.data.firstYearOutcomes
                })
            });
    }

    render() {

        const data1 = [
            { year: 1900, x: 1, y: 0, y2: 0, y3: 0 },
            { year: 1900, x: 0, y: 0, y2: 0, y3: 0 },
            { year: 1900, x: 2, y: 0, y2: 0, y3: 0 },
            { year: 1900, x: 3, y: 0, y2: 0, y3: 0 },
            { year: 1900, x: 4, y: 0, y2: 0, y3: 0 },
            { year: 1900, x: 5, y: 0, y2: 0, y3: 0 },
            { year: 1900, x: 6, y: 0, y2: 0, y3: 0 },
            { year: 1900, x: 7, y: 0, y2: 0, y3: 0 },
            { year: 1900, x: 8, y: 0, y2: 0, y3: 0 },
            { year: 1900, x: 9, y: 0, y2: 0, y3: 0 },
            { year: 1900, x: 10, y: 0, y2: 0, y3: 0 },
            { year: 1900, x: 11, y: 0, y2: 0, y3: 0 }
        ];

        var fechaActual = new Date();
        var fechaAnioatras = new Date();
        //fechaAnioatras.setFullYear(fechaAnioatras.getFullYear()-1)

        for (var i = 11; i >= 0; i--) {
            data1[i].x = fechaAnioatras.getMonth();
            data1[i].year = fechaAnioatras.getFullYear();

            if ((fechaAnioatras.getMonth - 1) < 0) {
                fechaAnioatras.setMonth(11);
                fechaAnioatras.setFullYear(fechaAnioatras.getFullYear() - 1);
            } else {
                fechaAnioatras.setMonth(fechaAnioatras.getMonth() - 1);
            }
        }
        //INCOMES a Data1
        this.state.firstYearIncomes.map(firstYearIncome => {
            let FYIncome = new Date(firstYearIncome.date);
            if (FYIncome.getFullYear() >= data1[0].year || FYIncome.getFullYear() <= data1[11].year) {
                data1[FYIncome.getMonth()].y += Math.round(firstYearIncome.income);
            }
        });
        //OUTCOMES a Data1
        this.state.firstYearOutcomes.map(firstYearOutcome => {
            let FYOutcome = new Date(firstYearOutcome.date);
            if (FYOutcome.getFullYear() >= data1[0].year || FYOutcome.getFullYear() <= data1[11].year) {
                data1[FYOutcome.getMonth()].y2 += Math.round(firstYearOutcome.outcome);
            }
        });

        for (var j = 0; j < 12; j++) {
            data1[j].y3 = data1[j].y - data1[j].y2;
        }
        let valores1 = data1.map(valores => {
            return {
                x: valores.x,
                y: valores.y / 1000000000
            }
        })
        let valores2 = data1.map(valores => {
            return {
                x: valores.x,
                y: valores.y2 / 1000000000
            }
        })
        let valores3 = data1.map(valores => {
            return {
                x: valores.x,
                y: valores.y3 / 1000000000
            }
        })


        return (
            <>
                <div className="p-0-5 w-full">
                    <PageTtile text={`Tus mejores ventas`} color={`black`} />
                    <div className="md-up:flex justify-center">
                        <div className="overflow-x-auto card card-shadow mb-1 bg-white sm-up:table mr-1">
                            <table>
                                <thead>
                                    <Row cells={Object.keys(this.state.head)} />
                                </thead>
                                <tbody>
                                    {
                                        (this.state.top).map((cliente, index) => (
                                            <Row key={index} cells={cliente} />
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <Graph data1={valores1} data2={valores2} data3={valores3} color1='purple' color2='red' color3='green' />
                            <div className="bg-blue-lighter " >
                            <ul className="text-center">
                                <li className="text-xs text-white inline-flex pr-0-5">{`Purple -> Income`}</li>
                                <li className="text-xs text-white inline-flex pr-0-5">{`Red -> Outcome `}</li>
                                <li className="text-xs text-white inline-flex">Green -> Profits </li>
                            </ul>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default History;