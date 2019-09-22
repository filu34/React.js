class Message extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            messageIsActive: false,
        }
        this.handleMessageBtn = this.handleMessageBtn.bind(this)
    }

    handleMessageBtn() {
        this.setState({
            messageIsActive: !this.state.messageIsActive
        })
    }

    render() {
        console.log(this.state.messageIsActive);
        const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero praesentium repellendus enim, iste itaque aspernatur iusto recusandae odit accusantium tempore pariatur numquam reiciendis natus laboriosam maiores voluptas doloremque ipsum.'

        return (
            <>
                <button onClick={this.handleMessageBtn}>
                    {this.state.messageIsActive ? 'Hide' : 'Show'}
                </button>
                {/* <p>{ this.state.messageIsActive && text }</p> */}
                {/* { this.state.messageIsActive ? <p>{text}</p> : null } */}
                { this.state.messageIsActive && <p>{text}</p> }
            </>
        )
    }
}

ReactDOM.render(<Message/>, document.getElementById('root'))