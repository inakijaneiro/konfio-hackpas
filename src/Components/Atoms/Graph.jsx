import React, { Component } from 'react';
import { XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineMarkSeries } from 'react-vis';

// npm install react-vis

const Graph = ({ data1, data2, data3, color1, color2, color3 }) => (
  <XYPlot height={300} width={300} xType="ordinal" margin-left='1rem'>
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis />
    <YAxis />
    <LineMarkSeries curve={'curveMonotoneX'}
      lineStyle={{ stroke: color1 }}
      markStyle={{ stroke: color1, fill: color1 }}
      data={data1} />
    <LineMarkSeries curve={'curveMonotoneX'}
      lineStyle={{ stroke: color2 }}
      markStyle={{ stroke: color2, fill: color2 }}
      data={data2} />
    <LineMarkSeries curve={'curveMonotoneX'}
      lineStyle={{ stroke: color3 }}
      markStyle={{ stroke: color3, fill: color3 }}
      data={data3} />
  </XYPlot>
);

export default Graph;