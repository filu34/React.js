const data = {
    users: [
        {
            id: 1,
            age: 29,
            name: "Arek",
        },
        {
            id: 2,
            age: 49,
            name: "Marta",
        },
        {
            id: 3,
            age: 19,
            name: "Stasia",
        }
    ]
}

const Item = ({user}) => (
    <div>
        <h1>Użytkownik {user.name}</h1>
        <h2> Ma {user.age}</h2>
    </div>
)

class ListItems extends React.Component {
    // state = {
    //     items: ["apple", "plum", "pear"],
    //     name: 'arek',
    //     age: '18',
    // }

    render() {
        const users = this.props.data.users;
        const Items = users.map(user => <Item key={user.id} user={user}/>);

        return(
            <div>
                {Items}
            </div>
        )
    }
}

ReactDOM.render(<ListItems data={data}/>, document.getElementById('root'));