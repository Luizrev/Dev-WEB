import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
//import FuncaoD from "./FuncaoD"
import MinhaCor from "./MeuContexto"

const FuncaoA = () => {

    const cor = {cor:"red",nome:"Luiz"}
    return (
        
        <MinhaCor.Provider value={cor}>
            <h1 style={{backgroundColor:cor.cor}}>Função A</h1>
            <FuncaoB />
            <FuncaoC />
        </MinhaCor.Provider>
        //<FuncaoB cor = "red"/>
        //<FuncaoC cor = "red"/>
    )
}

export default FuncaoA