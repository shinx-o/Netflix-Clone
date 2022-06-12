import React from 'react'
import './chart.scss'
import { LineChart, Line, XAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

function CustomTooltip({ payload, label, active }) {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
                <span>{payload[0].dataKey}</span>
            </div>
        );
    }

    return null;
}


export default function Chart({ title, data, dataKey, grid }) {
    return (
        <div className='chart'>
            <h2>{title}</h2>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    {grid && <CartesianGrid strokeDasharray="3 3" />}
                    <XAxis dataKey={dataKey}/>
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey={Object.keys(data[0])[1]} stroke="#e50914" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
