class Counter extends React.Component {
render() {
    return (
        <React.Fragment>
        <header>
            <h1>Filip Szettel</h1>
            <h2>Junior Front-end Web Developer</h2>
            <p>
                Poplar Road 83
                B66 4AW
                Smethwick
            </p>
        </header>
        <main>
            <div className="experience">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <p>
                            <span>
                            </span>
                            <span>
                            </span>    
                        </p>
                        </div>
                        <div className="flip-card-back">

                        </div>
                    </div>

                </div>
            </div>
        </main>
        </React.Fragment>
    )
}

}

ReactDOM.render(<Counter />, document.getElementById('root'))