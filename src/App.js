// import logo from './logo.svg';
//import './App.css';
// import './Components/Atividade00'
//import Mostrarprops from './Components/Atividade00';
//import { Header,Body,Footer } from './Components/03Hierarquia/04Multiplo';
// import * as Site from './Components/03Hierarquia/04Multiplo'
// import {Supermercado,Legume,Bebida} from './Components/05Children'
// import FuncaoA from "./Components/06Contexto/FuncaoA";
// import FuncaoB from "./Components/06Contexto/FuncaoB";
// import FuncaoC from "./Components/06Contexto/FuncaoC";
//import Avo from "./Components/atividade02/questao2/Avo";
//import {SaveData,LoadData} from "./Components/07Storage/MyStorage";
//import Pai from "./Components/08PaiFilho/Pai";
//import Contador from "./Components/09Estados/Contador";
//import ContarCidade from "./Components/Atividade03/ContarCidade";
import PokemonAxios from "./Components/Axios/PokemonAxios";

function App() {
  return (
    <div className="App">
      {/* {SaveData()} */}
      {/* {LoadData()} */}
      {/* <Pai></Pai> */}
      {/* <ContarCidade /> */}
      <PokemonAxios />


    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       Teste
//       <Mostrarprops
//         nome = "Luiz Henrique"
//         curso = "ciencia da computação"
//         universidade = "UFC"/>
//       <Site.Header/>
//       <Site.Body />
//       <Site.Footer />   
//       <Supermercado nome = "Teste">
//         <Legume nome="Queijo" />
//         <Bebida nome="Agua" />
//       </Supermercado>
//     </div>
//   );
// }

export default App;
