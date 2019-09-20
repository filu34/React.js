class App extends React.Component {
    state = {
        text: '',
    }

    handleClick = () => {
        // this.state.text += 'a';
        // console.log(this.state.text);

        const letter = 'a'
        this.setState({
            text: this.state.text + letter
        })
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>Add "A"</button>
                <h1>{this.state.text}</h1>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))