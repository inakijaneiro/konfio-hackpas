import React from 'react';

const PageTtile = ({text, color}) =>(
    <h1 className={`h1 text-${color}`}> {text} </h1>
);
export default PageTtile;