import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const Editar = () => {

    let { id } = useParams()
    const navigate = useNavigate()

    /*const alunoes = [
        { id: 0, nome: "Vito Corleone", curso: "SI", ira: "MEST", ai:{cg:true,mc:false,al:false,es:true}},
        { id: 1, nome: "Michael Corleone", curso: "DD", ira: "GRAD", ai:{cg:false,mc:true,al:false,es:false} },
        { id: 2, nome: "Luca Brasi", curso: "SI", ira: "MEST", ai:{cg:true,mc:false,al:true,es:false} },
        { id: 3, nome: "Kay Adams", curso: "SI", ira: "DOUT", ai:{cg:false,mc:true,al:false,es:false} },
        { id: 4, nome: "Peter Clemenza", curso: "CC", ira: "MEST", ai:{cg:false,mc:true,al:true,es:false} }
    ]*/

    /*function getalunoById(id) {
        for(let i=0;i<alunoes.length;i++)
            if(id == alunoes[i].id) return alunoes[i]
        return null
    }*/

    const [nome, setNome] = useState("") //textfield
    const [curso, setCurso] = useState("") //select
    const [ira, setira] = useState("10.0") //select
    // const [ai, setAi] = useState({ cg: false, mc: false, al: false, es: false }) //checkbox
    // let { cg, mc, al, es } = ai

    //como [] está vazio, o useEffect funciona como um construtor!
    useEffect(
        () => {
            //let aluno = getalunoById(id)
            axios.get(`http://localhost:3005/alunos/recuperar/${id}`)
                .then(
                    (response) => {
                        setNome(response.data.nome)
                        setCurso(response.data.curso)
                        setira(response.data.ira)
                    }
                )
                .catch(error => console.log(error))
        }
        ,
        []
    )

    function handleSubmit(event) {
        event.preventDefault()
        const aluno = {nome,curso,ira}
        axios.put(`http://localhost:3005/alunos/atualizar/${id}`,aluno)
        .then((response)=>{
            navigate("/listaraluno")
        })
        .catch(error=>console.log(error))
        /*console.log(nome)
        console.log(curso)
        console.log(ira)
        console.log(ai)*/
    }

    // function handleCheckbox(event) {
    //     setAi({
    //         ...ai,
    //         [event.target.name]: event.target.checked
    //     })
    // }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Editar aluno {id}
            </Typography>
            <Box
                sx={{ width: "80%" }}
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField
                    required
                    fullWidth
                    autoFocus
                    margin="normal"
                    label="Nome Completo"
                    value={nome}

                    id="nome"
                    name="nome"
                    onChange={(event) => setNome(event.target.value)}

                />
                {/* <TextField
                    required
                    fullWidth
                    margin="normal"
                    label="Curso"
                    value={curso}

                    id="curso"
                    name="curso"
                    onChange={(event) => setCurso(event.target.value)}

                /> */}

                <FormControl sx={{ marginTop: 2, width: "100%" }} required>
                    <InputLabel id="select-curso-label">Curso</InputLabel>
                    <Select
                        labelId="select-curso-label"
                        label="Curso"
                        value={curso}
                        onChange={(event) => setCurso(event.target.value)}
                    >
                        <MenuItem value="ES">ES</MenuItem>
                        <MenuItem value="CC">CC</MenuItem>
                        <MenuItem value="SI">SI</MenuItem>
                        <MenuItem value="EC">EC</MenuItem>
                        <MenuItem value="DD">DD</MenuItem>
                        <MenuItem value="RC">RC</MenuItem>
                    </Select>
                </FormControl>

                {/* <FormControl sx={{ mt: 2, ml: 2 }} component="fieldset" variant="standard">
                    <FormLabel component="legend" sx={{ fontSize: 12, mb: 2 }}>Áreas de Interesse</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={cg} name="cg" onClick={handleCheckbox} />} label="Computação Gráfica" />
                        <FormControlLabel control={<Checkbox checked={mc} name="mc" onClick={handleCheckbox} />} label="Matemática Computacional" />
                        <FormControlLabel control={<Checkbox checked={al} name="al" onClick={handleCheckbox} />} label="Algoritmos" />
                        <FormControlLabel control={<Checkbox checked={es} name="es" onClick={handleCheckbox} />} label="Engenharia de Software" />
                    </FormGroup>
                </FormControl> */}

                <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 2 }}>
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Atualizar
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default Editar