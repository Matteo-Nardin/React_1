import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/button';
import Display from './components/display';

const users = [
  {id: 1, name: 'John', lastName: 'Smith', city: 'San Francisco'}, 
  {id: 2, name: 'Mario', lastName: 'Rossi', city: 'Roma'},
  {id: 3, name: 'Jane', lastName: 'Smith', city: 'London'}
]

let obj;
async function robo(){
  await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response)=>response.json())
  .then((data)=>{
      console.log(data);
      obj = data;
      console.log(obj)
      App()
      })
  .catch((error)=>{
    console.log("Pokemon non trovato",error);
  })
  console.log(obj)
}
robo()
console.log(obj)

function App() {
  // loop infinito perché?
  //robo()
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <ButtonComponent label={"gatto"}></ButtonComponent>
      <Display stringa={"stringa"} pippo={users} obj={obj}></Display>
    </>
  );
  
}

export default App;
