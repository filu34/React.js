class Counter extends React.Component {
    state = {
        count: 0,
        result: 0,
    }
    
    render() {
        return(
            <>
                <button>+10</button>
                <button>+1</button>
                <button>Reset</button>
                <button>-1</button>
                <button>-10</button>
                <h1>Number of clicks: {this.state.count}</h1>
                <h1>Score: {this.state.result}</h1>
            </>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'))