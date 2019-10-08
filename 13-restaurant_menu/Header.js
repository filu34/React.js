const Header = (props) => {
    const activeItems = props.items.filter(item => item.active);
    const number = activeItems.length;
    return (
        <header>
            <h2>Your order size: {number}</h2>
             <h2>To pay: {number ? `${number *10}$` : "Nothing, so far."}</h2>
        </header>
    )
}