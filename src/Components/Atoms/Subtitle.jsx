import React from 'react';

const Subtitle = ({text, color}) => (
    <h2 className={`h2 text-${color}`}>{text}</h2>
);

export default Subtitle;