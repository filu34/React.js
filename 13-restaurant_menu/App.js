class App extends React.Component {
    state = {
        items: [
            { id: 1, name: "tea", active: true },
            { id: 2, name: "potatoes", active: false },
            { id: 3, name: "groats", active: false },
            { id: 4, name: "water soup", active: false },
            { id: 5, name: "hot water", active: false },
            { id: 6, name: "bread", active: true },
        ]
    }
    render() {
        return (
            <>
                <Header items={this.state.items}/>
                <ListItems/>
            </>
        );
    }
}