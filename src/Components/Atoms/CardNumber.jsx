import React from 'react';
import {numberWithCommas} from '../vendors';

const CardNumber = ({ amount, text, bg, color, classes }) => (
    <div className={`${classes} card card-shadow text-center bg-${bg} text-${color} mb-1`}>
        <p className="h4 mb-1">{`$${numberWithCommas(amount)}`}</p>
        <p className="">{text}</p>
    </div>

)
export default CardNumber;