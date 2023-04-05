import { useState,useEffect } from "react"
const Contador = () => {
    //let contador = 0
    const[contador,setContador] = useState(0)
    const[ehPar,setEhPar] = useState(true)
    useEffect(
        () => {
            if(contador%2===0) setEhPar(true)
            else setEhPar(false)
        },
        [contador]
    )

    const aumentarContador = () => {
        //contador++
        setContador(contador + 1)
        console.log(contador)
    }
    return (
        <>
            <h1>Contador: {contador}</h1>
            <h1>Eh par: {ehPar+""}</h1>
            <button
            onClick={aumentarContador}
            >
                Contar +1
            </button>
        </>
    )
}
export default Contador