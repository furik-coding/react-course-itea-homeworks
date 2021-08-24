import React, { Component } from 'react';
import Chart from 'chart.js';

class GraphicItem extends Component {

    state = {
        data: [0, 10, 5, 2, 20, 30, 45]
    }

    canvas = React.createRef();

    graphHandler = () => {


        console.log(this.state.data)

        let newArr = this.state.data.map(item => Math.floor(Math.random() * 100))

        this.setState({
            data: newArr
        })
    }

    componentDidMount() {

        console.log(this.canvas.current)
        let ctx = this.canvas.current.getContext('2d');

        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: this.state.data
                }]
            },
            options: {}
        });

        console.log(this.chart);
    }

    componentDidUpdate() {
        this.chart.data.datasets[0].data = this.state.data;
        this.chart.update();
    }

    render = () => {

        const { graphHandler } = this;


        return (
            <div>

                <canvas ref={this.canvas} />
                <button onClick={graphHandler} >Randomize</button>
            </div>
        )
    }
}

export default GraphicItem;
