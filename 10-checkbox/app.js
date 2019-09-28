const ValidationMessage = (props) => {
    const { txt } = props;
    return (
        <p>{txt}</p>
    )
}
const OrderForm = (props) => (
    <form onSubmit={props.submit}>
        <input type="checkbox" id="age" onChange={props.change} checked={props.isConfirmed}/>
        <label htmlFor="age">I'm more than 16 years old.</label>
        <br/>
        <button type="submit">Buy Ticket</button>
    </form>
)
class TicketShop extends React.Component {
    state = {
        isConfirmed: false,
        isFormSubmitted: false,
    }

    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isFormSubmitted: false,
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('ok');
        if(!this.state.isFormSubmitted) {
            this.setState({
                isFormSubmitted: true,
            })
        }
    }

    displayMessage = () => {
        if(this.state.isFormSubmitted) {
            if(this.state.isConfirmed) {
                return <ValidationMessage txt='You can watch the movie. Welcome!!'/>
            } else {
                return <ValidationMessage txt="You can't watch that movie, if you are less than 16 years old!!"/>
            }
        } else { return null }
    }

    render() {
        const { isConfirmed, isFormSubmitted } = this.state;

        return (
            <>
                <h1>Buy a ticket for the best horror of the year!</h1>
                <OrderForm
                    change={this.handleCheckboxChange} 
                    submit={this.handleFormSubmit}
                    checked={isConfirmed}
                />
                {this.displayMessage()}
            </>
        )
    }

}


ReactDOM.render(<TicketShop/>, document.getElementById('root'));