import { useEffect,useState } from "react";

const ContarCidade = () => {
    const [Vern,setVern] = useState(0)
    const [Rohendel,setRohen] = useState(0)
    const [Elgacia,setElg] = useState(0)
    const [Anikka,setAnik] = useState(0)
    const [Maisv,setMaisv] = useState("")
    const [Menosv,setMenosv] = useState("")

    useEffect(
        ()=>{
            let cidade = [Vern,Elgacia,Rohendel,Anikka]
            let nomes = ["Vern","Elgacia","Rohendel","Anikka"]
            let maior = cidade[0]
            let menor = cidade[0]

            for(let i=0;i<cidade.length;i++){
                if(cidade[i] > maior) maior = cidade[i]
                if(cidade[i] < menor) menor = cidade[i]
            }
            setMaisv("")
            for(let i=0;i<cidade.length;i++){
                if(cidade[i] === maior) setMaisv((anterior)=>anterior+" "+nomes[i])
            }
            setMenosv("")
            for(let i=0;i<cidade.length;i++){
                if(cidade[i] === menor) setMenosv((anterior)=>anterior+" "+nomes[i])
            }

        },[Vern,Elgacia,Rohendel,Anikka]
        // console.log("att")
    )

    const addVern = () => {
        setVern(Vern + 1)
    }
    const addRohendel = () => {
        setRohen(Rohendel + 1)
    }
    const addElg = () => {
        setElg(Elgacia +1)
    }
    const addAnik = () => {
        setAnik(Anikka +1)
    }

    return (
        <>
            <h1>Vern: {Vern+""}</h1>
            <h1>Rohendel: {Rohendel+""}</h1>
            <h1>Elgacia: {Elgacia+""}</h1>
            <h1>Anikka: {Anikka+""}</h1>

            <button onClick={addVern}>Votar em Vern</button>
            <button onClick={addRohendel}>Votar em Rohendel</button>
            <button onClick={addElg}>Votar em Elgacia</button>
            <button onClick={addAnik}>Votar em Anikka</button>

            <h2>Cidade mais votada: {Maisv}</h2>
            <h2>Cidade menos votada: {Menosv}</h2>
        </>
    )

}
export default ContarCidade