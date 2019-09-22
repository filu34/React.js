class App extends React.Component {
    state = {
        value: '',
    }

    handleInputChange(e) {
        console.log(e.target.value);
        this.setState({
            value: e.target.value
        })
    }

    handleResetBtn() {
        this.setState({
            value: '',
        })
    }

    render() {
        return (
            <>
                <input value={this.state.value} placeholder='Write something...' onChange={this.handleInputChange.bind(this)} type="text"/>
                <button onClick={this.handleResetBtn.bind(this)}>Reset</button>
                <h1 className='title'>{this.state.value}</h1>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))