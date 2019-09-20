class App extends React.Component {

    state = {
        text: '',
        btn: 'Run'
    }

    handleClick = () => {

        const number = Math.floor(Math.random() * 10)
        this.setState(
            () => ({
                text: this.state.text + number
            })
        )
    }

    render() {
        const btnName = "Create Number"
        return (
            <>
                <button onClick={this.handleClick}>{this.state.btn}</button>
                <PanelResult test={this.state.text}/>
            </>
        )
    }
}

const PanelResult = (props) => {
    return (
        <h1>{props.test}</h1>
    )
}

ReactDOM.render(<App btnTitle='Add Number'/>, document.getElementById('root'))