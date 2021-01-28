import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = { date: new Date()}
    }

    componentDidMount(){
        this.timeID = setInterval(
            () => this.tick(), 
            1000
            );
    }

    componentWillUnmount(){
        clearInterval(this.timeID);
    }

    tick(){
        this.setState( 
            {
                date: new Date()
            }
        );
    }

    render(){
        return(
            <footer class="page-footer font-small bg-blue text-center">
                <h2>Timer</h2>
                <p>{ this.state.date.toLocaleTimeString() }</p>
            </footer>
        );
    };
}

export default Clock;