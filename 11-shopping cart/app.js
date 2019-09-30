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

    buyButton = () => {
        this.state({
            availableProducts: this.state.availableProducts - this.state.shoppingCart,
        })
    }
    
    render() {
        return (
            <div>
                <h1>Available Products in the Warehouse: {this.state.availableProducts}</h1>
                <button
                    disabled={this.state.shoppingCart ? false : true}
                    onClick={this.handleRemoveFromCart}
                >-</button>
                <span> {this.state.shoppingCart} </span>
                <button
                    onClick={this.handleAddToCart}
                >+</button>
                {this.state.shoppingCart > 0 && <button onClick={this.buyButton}>Buy</button>}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));