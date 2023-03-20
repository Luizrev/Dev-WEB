//import React from "react"
//v0
const Mostrarprops = (props) => {
    return (
        <div>
            <h1>Meu nome é: {props.nome}</h1>
            <h1>Meu curso é: {props.curso}</h1>
            <h1>Minha universidade é: {props.universidade}</h1>
        </div>
    )
}
//v1
// const Mostrarprops = (props) => {
//     let nome = props.nome
//     let curso = props.curso
//     let universidade = props.universidade
//     return (
//         <div>
//             <h1>Meu nome é: {nome}</h1>
//             <h1>Meu curso é: {curso}</h1>
//             <h1>Minha universidade é: {universidade}</h1>
//         </div>
//     )
// }
//v2
// const Mostrarprops = (props) => {
//     let {nome,curso,universidade} = props
//     return (
//         <div>
//             <h1>Meu nome é: {nome}</h1>
//             <h1>Meu curso é: {curso}</h1>
//             <h1>Minha universidade é: {universidade}</h1>
//         </div>
//     )
// }
//v3
// const Mostrarprops = ({nome,curso,universidade}) => {
//     return (
//         <div>
//             <h1>Meu nome é: {nome}</h1>
//             <h1>Meu curso é: {curso}</h1>
//             <h1>Minha universidade é: {universidade}</h1>
//         </div>
//     )
// }

export default Mostrarprops
