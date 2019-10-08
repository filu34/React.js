class Form extends React.Component {
    state = {
        city: "London",
        text: "",
        isLoved: true,
        number: "0",
    }

    handleCityChange = (e) => {
        this.setState({
            city: e.target.value,
        })
    }

    handleTextChange = e => {
        this.setState({
            text: e.target.value,
        })
    }

    handleIsLovedChange = e => {
        this.setState({
            isLoved: e.target.checked,
        })
    }

    handleVisitsNumberChange(e) {
        this.setState({
            number: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <label>
                    City: <br/>
                    <input 
                        value={this.state.city} 
                        onChange={this.handleCityChange} 
                        type="text"/>
                </label>
                <br/><br/>
                <label>
                    Write something about that city: <br/>
                    <textarea
                        value={this.state.text} 
                        onChange={this.handleTextChange}></textarea>
                </label>
                <br/><br/>
                <label>
                    Do you like that city? <span></span>
                    <input
                        type="checkbox"
                        checked={this.state.isLoved} 
                        onChange={this.handleIsLovedChange}/>
                </label>
                <br/><br/>
                <label>
                    How many times you were there? <br/>
                    <select 
                        value={this.state.number}
                        onChange={this.handleVisitsNumberChange.bind(this)}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="more">more</option>
                    </select>
                    
                </label>
            </div>
        )
    }
}

ReactDOM.render(<Form/>, document.getElementById("root"));