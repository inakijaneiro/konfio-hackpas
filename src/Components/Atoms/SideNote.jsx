import React from 'react';

const SideNote = ({text, color}) => (
    <h5 className={`h5 text-${color} mb-0-5 italic`}>{text}</h5>
);

export default SideNote;