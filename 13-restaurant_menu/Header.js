const Header = (props) => {
    const activeItems = props.items.filter(item => item.active);
    return (
        <header>
            <h2>Your order size: {activeItems.length}</h2>
             <h2>To pay: {activeItems.length * 10}</h2>
        </header>
    )
}