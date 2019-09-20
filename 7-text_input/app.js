class App extends React.Component {
    state = {

    }

    render() {
        return (
            <>
                <input type="text"/>
                <button>Reset</button>
                <h1></h1>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))