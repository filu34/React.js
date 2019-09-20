// functional component, statless

const Header = () => {
    return (
            <h1>Pierwszy komponent</h1>
    )
}

// class component, state

class Blog extends React.Component {
    state = {
        number: 0,
    }
    render() {
        return (
            <section>
                <h2>Komponent klasowy {this.state.number}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga praesentium quos hic quae, iusto facere debitis deserunt doloremque quisquam nam officia omnis porro repellat minus obcaecati non perspiciatis at. Non?
                </p>
            </section>
        )
    }
}

const App = () => {
    return (
        <>
            <Header />
            <Blog />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))