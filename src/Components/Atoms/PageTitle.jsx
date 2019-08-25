import React from 'react';

const PageTtile = ({text, color}) =>(
    <h1 className={`h1 text-${color} mb-0-5`}> {text} </h1>
);
export default PageTtile;