class Counter extends React.Component {
    state = {
        count: 0,
        result: this.props.result,
    }
    
    handleMathClick = (type, number) => {
        // debugger
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        if(type === 'subtraction') {
            this.setState(prevState => ({
                result: prevState.result - number,
            }))
        
        } else if(type === 'reset') {
            this.setState(() => ({
                result: this.props.result,
        }))
        } else if(type === 'addition') {
            this.setState(prevState => ({
                result: prevState.result + number,
            }))
        }
    }

    render() {
        return(
            <>
                <MathButton 
                    name='-10' 
                    number='10' 
                    type='subtraction' 
                    click={this.handleMathClick}
                />
                <MathButton 
                    name='-1' 
                    number='1' 
                    type='subtraction' 
                    click={this.handleMathClick}
                />
                <MathButton 
                    name='Reset'
                    type='reset' 
                    click={this.handleMathClick}
                />
                <MathButton 
                    name='+1' 
                    number='1' 
                    type='addition' 
                    click={this.handleMathClick}
                />
                <MathButton 
                    name='+10' 
                    number='10' 
                    type='addition' 
                    click={this.handleMathClick}
                />
                <PanelScore count={this.state.count} result={this.state.result}/>
            </>
        )
    }
}

const MathButton = (props) => {
    // console.log(props.name)
    const number = parseInt(props.number)
    return(
        <button onClick={() => props.click(props.type, number)}>{props.name}</button>
    )
}

const PanelScore = (props) => {

    return(
        <>
            <h1>Number of clicks: {props.count} {props.count > 10 ? <span> >>> CPU Overloaded!</span> : null}</h1>
            <h1>Score: {props.result}</h1>
        </>
    )
}

const startValue = 0;
ReactDOM.render(<Counter result={startValue} />, document.getElementById('root'))