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

    handleBuy = (props) => {
       this.setState({
           availableProducts: this.state.availableProducts - this.state.shoppingCart,
           shoppingCart: 0,
       })
    }
    
    render() {
        const { shoppingCart, availableProducts } = this.state;
        const { handleRemoveFromCart, handleAddToCart, handleBuy } = this;
        const style = shoppingCart === 0 ?  { opacity: 0.3, } : {};

        return (
            <div>
                <h1>Available Products in the Warehouse: { availableProducts }</h1>
                <button
                    disabled={ shoppingCart ? false : true }
                    onClick={ handleRemoveFromCart }
                >-</button>

                <span style={ style }> { shoppingCart } </span>

                <button
                    disabled={ shoppingCart === availableProducts ? true : false }
                    onClick={ handleAddToCart }
                >+</button>
                { shoppingCart > 0 && <button onClick={ handleBuy }>Buy</button> }
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));