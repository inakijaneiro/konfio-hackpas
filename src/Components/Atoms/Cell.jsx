import React from 'react';

const Cell = ({text}) => (
    <td className="table-cell p-0-5 whitespace-no-wrap">{isNaN(text)? text : Math.round(text)}</td>
)

export default Cell;