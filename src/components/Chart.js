import React, { Component } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'

export default class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Boston', 'Los Angeles', 'Rialto', 'Fontana', 'Little Rock'],
                datasets: [
                   { 
                    label: 'Population',
                    data:[
                        456232,
                        234532,
                        153063,
                        234095,
                        34534
                    ],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(255, 3, 132, 0.6)',
                        'rgba(255, 99, 222, 0.6)',
                        'rgba(255, 99, 210, 0.6)',
                        'rgba(255, 99, 99, 0.6)',
                    ]
                    
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className='chart'>
                <Bar data={this.state.chartData} options={{ maintainAspectRatio: false }} />
            </div>
        )
    }
}
