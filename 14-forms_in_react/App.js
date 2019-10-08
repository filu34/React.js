class Form extends React.Component {
    state = {
        city: "London",
        text: "",
        isLoved: true,
        number: "0",
    }

    handleChange = e => {
        if(e.target.type === "checkbox") {
            this.setState({
                [e.target.name]: e.target.checked,
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value,
            })
        }
        
    }

    render() {
        return (
            <div>
                <label>
                    City: <br/>
                    <input 
                        name="city"
                        value={this.state.city} 
                        onChange={this.handleChange} 
                        type="text"/>
                </label>
                <br/><br/>
                <label>
                    Write something about that city: <br/>
                    <textarea
                        name="text"
                        value={this.state.text} 
                        onChange={this.handleChange}></textarea>
                </label>
                <br/><br/>
                <label>
                    Do you like that city? <span></span>
                    <input
                        name="isLoved"
                        type="checkbox"
                        checked={this.state.isLoved} 
                        onChange={this.handleChange}/>
                </label>
                <br/><br/>
                <label>
                    How many times you were there? <br/>
                    <select 
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}>
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