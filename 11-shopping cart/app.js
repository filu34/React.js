class App extends React.Component {
    state = {
        availableProducts: 7,
        shoppingCart: 0,
    }

    handleRemoveFromCart = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart - 1,
        })
    }

    handleAddToCart = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart + 1,
        })
    }

    render() {
        return (
            <div>   
                <button
                    disabled={this.state.shoppingCart ? false : true}
                    onClick={this.handleRemoveFromCart}
                >-</button>
                <span> {this.state.shoppingCart} </span>
                <button
                    onClick={this.handleAddToCart}
                >+</button>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));