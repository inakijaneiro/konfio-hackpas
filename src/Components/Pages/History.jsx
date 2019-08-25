import React from 'react';
import Row from '../Atoms/Row';
import PageTtile from '../Atoms/PageTitle';
import axios from 'axios'

class History extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            top: [],
            head: []
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`https://pure-ravine-38602.herokuapp.com/${id}/salud`)
            .then(response => { 
                this.setState({
                    top: (response.data.top5[0]),
                    head: (response.data.top5[0][0])  
                }) 
            });
    }

    render() {
        return (
            <div className="p-0-5">
                <PageTtile text={`Tus mejores ventas`} color={`black`} />
                    <div className="overflow-x-auto card card-shadow mb-1 bg-white sm-up:table">
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
            </div>
        )
    }
}

export default History;