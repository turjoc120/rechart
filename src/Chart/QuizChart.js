import React from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import CustomTooltip from './CustomTooltip';

const QuizChart = () => {
    const COLORS = ['green', 'red'];

    const pieData = [
        {
            name: "Correct",
            value: 7 //dynamic data
        },
        {
            name: "Wrong",
            value: 3 //dynamic data
        },

    ];




    return (
        <>
            <div id="chart-container" style={{ textAlign: "center", color: "blue" }}>
                <h1>Your Quiz Result</h1>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <PieChart width={730} height={300}>

                        <Pie data={pieData} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
                            {
                                pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                            }
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                    </PieChart>
                </div>
            </div>

        </>

    )
};

export default QuizChart;