// import logo from './logo.svg';
import './App.css';
// import './Components/Atividade00'
import Mostrarprops from './Components/Atividade00';
//import { Header,Body,Footer } from './Components/03Hierarquia/04Multiplo';
import * as Site from './Components/03Hierarquia/04Multiplo'
import {Supermercado,Legume,Bebida} from './Components/05Children'
function App() {
  return (
    <div className="App">
      Teste
      <Mostrarprops
        nome = "Luiz Henrique"
        curso = "ciencia da computação"
        universidade = "UFC"/>
      <Site.Header/>
      <Site.Body />
      <Site.Footer />   
      <Supermercado nome = "Teste">
        <Legume nome="Queijo" />
        <Bebida nome="Agua" />
      </Supermercado>
    </div>
  );
}

export default App;
