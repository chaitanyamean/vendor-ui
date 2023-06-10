import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    email: 4000,
    chat: 2400,
    call: 2400,
  },
  {
    name: 'Feb',
    email: 3000,
    chat: 1398,
    call: 2210,
  },
  {
    name: 'Mar',
    email: 2000,
    chat: 9800,
    call: 2290,
  },
  {
    name: 'Apr',
    email: 2780,
    chat: 3908,
    call: 2000,
  },
  {
    name: 'May',
    email: 1890,
    chat: 4800,
    call: 2181,
  },
  {
    name: 'June',
    email: 2390,
    chat: 3800,
    call: 2500,
  },
  {
    name: 'July',
    email: 2000,
    chat: 2300,
    call: 1100,
  },
];

export default class ScartedAreaChart extends PureComponent {
  // static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="email" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="chat" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="call" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
