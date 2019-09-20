class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         text: '',
    //     }
    //     this.handleClick = this.handleClick.bind(this)
    // }

    state = {
        text: '',
    }

    handleClick = () => {
        // this.state.text += 'a';
        // console.log(this.state.text);

        const letter = 'a'
        // this.setState({
        //     text: this.state.text + letter
        // })

        this.setState(
            () => ({
                text: this.state.text + letter
            })
        )
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick.bind(this)}>Add "A"</button>
                <h1>{this.state.text}</h1>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))