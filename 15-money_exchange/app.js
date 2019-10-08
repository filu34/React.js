// const Dollars = (props) => (
//     <div>Value in $: { props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2) } </div>
// )

// const Euros = (props) => {
//     const value = (props.cash / props.ratio).toFixed(2);
//     return(
//         <div>Value in Euro:  { props.cash <= 0 ? "" : value } </div>
//     )
// }

const Cash = (props) => {
    const value = (props.cash / props.ratio * props.price).toFixed(2);
    console.log(props.ratio, value, props.cash)
    
    return(
        <div>{ props.title } { props.cash <= 0 ? "" : value } </div>
    )
}

class ExchangeCounter extends React.Component {

    state = {
        amount: "",
        // ratioDollar: 3.6,
        // ratioEuro: 4.2,
        product: "petrol",
    }

    static defaultProps = {
        currencies: [
            {   
                id: 1,
                name: "dollar",
                ratio: 3.6,
                title: "Value in $: ",
            },
            {   
                id: 2, 
                name: "euro", 
                ratio: 4.1, 
                title: "Value in Euro: ",
            },
            {   
                id: 3, 
                name: "pound", 
                ratio: 4.9, 
                title: "Value in Pounds: ",
            },
            {   
                id: 4, 
                name: "złoty", 
                ratio: 1, 
                title: "Value in Złoty: ",
            },
        ],

        prices: {
            electricity: .51,
            gas: 4.06,
            petrol: 4.76,
        }
    }

    

    handleChange = e => {
        this.setState({
            amount: e.target.value,
        })
    }
    
    handleSelect = e => {
        this.setState({
            product: e.target.value,
            amount: "",
        })
    }

    insertSuffix(select) {
        if(select === "electricity") return <em> kWh</em>
        else if(select === "gas") return <em> cm3</em>
        else if(select === "petrol") return <em> liters</em>
        else return null
        
    }

    selectPrice(select) {
        const price = this.props.prices[select]
        return price
    }

    render() {
        const { amount, product } = this.state;
        const price = this.selectPrice(product)

        const calculators = this.props.currencies.map(currency => (
            <Cash 
                key={currency.id} 
                ratio={currency.ratio} 
                title={currency.title} 
                cash={amount} 
                price={price}/>
        ))

        return (
            <div className="app">
                <label>Select product: <span></span>
                    <select 
                        value={product} 
                        onChange={this.handleSelect}>
                        <option value="electricity">Electricity</option>
                        <option value="gas">Gas</option>
                        <option value="petrol">Petrol</option>
                    </select>

                </label>
                <h1>ExchangeCounter</h1>
                <label>
                    <input 
                        type="number" 
                        value={ amount } 
                        onChange={ this.handleChange }/>
                    {this.insertSuffix(this.state.product)}
                </label><br/><br/>

                {/* <Dollars cash={ ammount } ratio={ ratioDollar }/> */}
                {/* <Euros cash={ ammount } ratio={ ratioEuro }/> */}
                {/* <Cash cash={ ammount } ratio={ ratioEuro } title="Value in Euro:  "/> */}
                {/* <Cash cash={ ammount } ratio={ ratioDollar } title="Value in $:  "/> */}

                { calculators }
            </div>
        )
    }
}

ReactDOM.render(<ExchangeCounter/>, document.getElementById("root"));