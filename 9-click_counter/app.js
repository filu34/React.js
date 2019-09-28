class Counter extends React.Component {
    state = {
        count: 0,
        result: 0,
    }
    
    handleMathClick(type, number){
        // debugger
        if(type === 'substraction') {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result - number,
            }))
        
        } else if(type === 'reset') {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: 0,
        }))
        }
    }

    render() {
        return(
            <>
                <button onClick={this.handleMathClick.bind(this, 'substraction', 10)}>-10</button>
                <button onClick={() => this.handleMathClick('substraction', 1)}>-1</button>
                <button onClick={this.handleMathClick.bind(this, 'reset')}>Reset</button>
                <button onClick={() => this.handleMathClick('addition', 1)}>+1</button>
                <button>+10</button>
                <h1>Number of clicks: {this.state.count}</h1>
                <h1>Score: {this.state.result}</h1>
            </>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'))