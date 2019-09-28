
const displayMessage = (isConfirmed, isFormSubmitted) => {
    if(isFormSubmitted) {
        if(isConfirmed) {
            return <ValidationMessage txt='You can watch the movie. Welcome!'/>
        } else {
            return <ValidationMessage txt="You can't watch that movie, if you are less than 16 year old!"/>
        }
    } else { return null }
}

const ValidationMessage = (props) => {
    const { txt } = props;
    return (
        <p>{txt}</p>
    )
}

// const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;
// const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!</p>;


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

    // displayMessage = () => {
    //     if(this.state.isFormSubmitted) {
    //         if(this.state.isConfirmed) {
    //             return <ValidationMessage txt='Możesz obejrzeć film. Zapraszamy!'/>
    //         } else {
    //             return <ValidationMessage txt='Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!'/>
    //         }
    //     } else { return null }
    // }

    render() {
        const { isConfirmed, isFormSubmitted } = this.state;

        return (
            <>
                <h1>Buy a ticket for the best horror of the year!</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={isConfirmed}/>
                    <label htmlFor="age">I'm more than 16 years old.</label>
                    <br/>
                    <button type="submit">Buy Ticket</button>
                </form>
                {displayMessage(isConfirmed, isFormSubmitted)}
            </>
        )
    }

}


ReactDOM.render(<TicketShop/>, document.getElementById('root'));