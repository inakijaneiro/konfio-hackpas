import React from 'react';
import Cell from './Cell';

const Row = ({ cells }) => {

    let values = Object.values(cells);   
    // let att = cells.getAttribute('type'); 

    return (
        <tr className="table-row overflow-scroll border-b-2">
            {
                values.map((element, index) => (
                <Cell key={index} text={element}/>
            ))}
        </tr>
    )

}

// class Row extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             keys: Object.keys(this.props.cells),
//             values: Object.values(this.props.cells),
//         }
//     }

//     render() {
//         console.log(this.state.keys)
//         return (

//             this.props.type === 'head'
//                 ? (
//                     <tr className="table-row overflow-scroll border-b-2">
//                         {
//                             this.state.keys.map((element, index) => (
//                                 <Cell key={index} text={element} />
//                             ))
//                         }
//                     </tr>
//                 )
//                 : (
//                     <tr className="table-row overflow-scroll border-b-2">
//                         {
//                             this.state.values.map((element, index) => (
//                                 <Cell key={index} text={element} />
//                             ))
//                         }
//                     </tr>
//                 )
//         )
//     }

// }

export default Row;