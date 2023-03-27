import { Children,cloneElement } from "react"

//v1
// const Supermercado = ({children,nome}) => {
//     return (   
//         <div>
//             <h1>Supermercado {nome}</h1>
//             {children}
//         </div>
//     )
// }
//v2
const Supermercado = (props) => {
    return (
        <div>
            <h1>Supermercado {props.nome}</h1>
            {
                Children.map(
                    props.children,
                    (filho) => {
                        return cloneElement(filho,{supermercado:props.nome})
                    }
                )
            }
        </div>
    )
}

const Bebida = ({nome,supermercado}) => {
    return (
        <div>
            Bebida {nome} do supermerdado {supermercado}
        </div>
    )
}

const Legume = ({nome,supermercado}) => {
    return (
        <div>
            Legume {nome} do supermerdado {supermercado}
        </div>
    )
}

export {Supermercado,Bebida,Legume}