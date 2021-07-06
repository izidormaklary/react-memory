import './App.css';

import Card from "./components/Card";



function App() {
    let comps = Array.from(Array(8).keys()).concat(Array.from(Array(8).keys()));
    console.log(comps)
    comps = comps.sort(() => Math.random() - 0.5)
    console.log(comps)
    return (
        <div className="App">
            {comps.map((value, index) => {
                let src = "./resources/" + value + ".png"
                let id = index;
                return (
                    <>

                        <Card id={id} value={value} src={src}  />
                    </>)
            })}
        </div>
    );
}

export default App;
