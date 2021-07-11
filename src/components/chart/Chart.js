import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Col, Row } from 'reactstrap';

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const nett = [17000, 19000, 23000, 20000, 21000, 24000];
// const gross = [19000, 20000, 24000, 22000, 23000, 25000];
// const apv = [18000, 20000, 24000, 21000, 22000, 25000];
// const upt = [7.98, 8.00, 9.00, 8.55, 9.25, 10.00];
const data = {
    labels: labels,
    datasets: [
        {
            barPercentage: 0.5,
            barThickness: 25,
            label: 'Nett',
            data: nett,
            backgroundColor: 'rgba(55, 176, 76)',
        },
        {
            type: 'line',
            label: 'Line Dataset',
            data: [17000, 19000, 23000, 20000, 21000, 24000],
            fill: false,
            borderColor: 'rgba(255, 232, 84, 1)'
        }
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    offsetGridLines: true
                }
            }]
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart'
            }
        }
    },
};

const Chart = () => (
    <>
        <div className="chart-group">
            <Row>
                <Col className="chart-title">AVERAGE PURCHASE VALUE</Col>
                <Col className="chart-date">Last 6 months</Col>
            </Row>
            <Bar data={data} options={config} />
        </div>
    </>
);

export default Chart;