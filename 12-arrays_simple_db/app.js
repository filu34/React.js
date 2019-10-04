const data = {
    users: [
        {
            id: 1,
            age: 29,
            name: "Arek",
            sex: "male",
        },
        {
            id: 2,
            age: 49,
            name: "Marta",
            sex: "female",
        },
        {
            id: 3,
            age: 19,
            name: "Stasia",
            sex: "female",
        },
        {
            id: 4,
            age: 24,
            name: "Karol",
            sex: "male",
        }
    ]
}

const Item = ({user}) => (
    <div>
        <h1>User: {user.name}</h1>
        <p>User Info </p>
        <p>Age: <strong>{user.age}</strong></p>
        <p>Sex: {user.sex}</p>
    </div>
)

class ListItems extends React.Component {
    state = {
        select: "all",
    }

    handleUsersFilter(option) {
        console.log(option)
        this.setState({
            select: option,
        })
    }

    usersList = () => {
        let users = this.props.data.users;
        switch(this.state.select) {
            case "all":
                return users.map((user) => <Item user={user} key={user.id}/>)
            case "female":
                users = users.filter(user => user.sex === "female");
                return users.map((user) => <Item user={user} key={user.id}/>)
            case "male":
                users = users.filter(user => user.sex === "male");
                return users.map((user) => <Item user={user} key={user.id}/>)
            default:
                return "Something is not right."
        }
        // users = users.map((user) => <Item user={user} key={user.id}/>)
        // return users
    }

    render() {
        // let users = this.props.data.users;
        // users = users.filter((user) => user.sex === "female")
        // const Items = users.map(user => <Item key={user.id} user={user}/>);

        return(
            <div>
                <button onClick={this.handleUsersFilter.bind(this, "all")}>All</button>
                <button onClick={this.handleUsersFilter.bind(this, "male")}>Men</button>
                <button onClick={this.handleUsersFilter.bind(this, "female")}>Women</button>
                {this.usersList()}
                {/* {[<Items/>, <Items/>, <Items/>]} */}
                {/* {Items} */}
            </div>
        )
    }
}

ReactDOM.render(<ListItems data={data}/>, document.getElementById('root'));