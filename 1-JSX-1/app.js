// console.log(React);
// console.log(ReactDOM);

const element = <div>Pierwszy element React</div>

const element2 = React.createElement(
  "div",
  null,
  "Pierwszy element React"
)

const element3 = (
  <div>
    <p id="main" className="red">Tekst</p>
  </div>
)

const element4 = <div><p>Tekst</p></div>

// Wersja skrócona React.Fragment (<>) nie zadziała dla wersji babel mniejszej niż 7.
const element5 = (
  <>
    <section></section>
    <section></section>
  </>
)

