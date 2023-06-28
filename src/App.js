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
//import PokemonAxios from "./Components/Axios/PokemonAxios";
// import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
//import Questao01X from "./Components/Prova01/Questao01";
//import Questao02 from "./Components/Prova01/Questao02";
// import Questao03 from "./Components/Prova01/Questao03";
// import Signin from "./Components/13MUI/Singin/Signin";
// import Mymenu from "./Components/13MUI/CRUD/Mymenuv0";
// import Signin from "./Components/13MUI/Singin/Signin";
// import MyMenu from "./Components/13MUI/CRUD/MymenuV1";
import MainPage from "./Components/13MUI/CRUD/Mainpage";


function App() {
  return (
    <div className="App">
      {/* {SaveData()} */}
      {/* {LoadData()} */}
      {/* <Pai></Pai> */}
      {/* <ContarCidade /> */}
      {/* <PokemonAxios /> */}
      {/* <Questao01X /> */}
      {/* <Questao02 /> */}
      {/* <Questao03 /> */}
      {/* <Signin /> */}
      {/* <Mymenu />
      <Signin /> */}
      {/* <MyMenu /> */}
      <MainPage />
      

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
