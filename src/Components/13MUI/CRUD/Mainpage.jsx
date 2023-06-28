import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "@mui/material"
import MyMenu from "./MymenuV1"

import Cadastrar from "./professor/Cadastrar"
import Listar from "./professor/Listar"
import Editar from "./professor/Editar"

const MainPage = () => {
    return (
        <BrowserRouter>
            <MyMenu />
            <Container sx={{mt:5,display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Routes>
                    <Route path="cadastrarProfessor" element={<Cadastrar/>}/>
                    <Route path="listarProfessor" element={<Listar/>}/>
                    <Route path="editarProfessor/:id" element={<Editar/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default MainPage