import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Cadastrar = () => {

    const [nome,setNome] = useState("") //textfield
    const [curso,setCurso] = useState("") //textfield
    const [ira,setira] = useState("10.0") //select
    // const [ai,setAi] = useState({cg:false,mc:false,al:false,es:false}) //checkbox
    // let { cg, mc, al, es} = ai
    let navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        const aluno = {nome,curso,ira}
        console.log(aluno)
        axios.post("http://localhost:3005/alunos/cadastrar",aluno)
        .then((response)=>{
            alert(`Aluno ID ${response.data._id} adicionado com sucesso!`)
            navigate("/listaraluno")
        })
        .catch(error=>console.log(error))
        /*console.log(nome)
        console.log(curso)
        console.log(ira)
        console.log(ai)*/
    }

    // function handleCheckbox(event){
    //     setAi({
    //         ...ai,
    //         [event.target.name]: event.target.checked 
    //     })
    // }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Cadastrar aluno
            </Typography>
            <Box
                sx={{width:"80%"}}
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField 
                    required
                    fullWidth
                    autoFocus
                    margin="normal"
                    label="Nome Completo"

                    id="nome"
                    name="nome"
                    onChange={(event)=>setNome(event.target.value)}
                    
                />
                <TextField

                    margin="normal"
                    required
                    fullWidth
                    id="ira"
                    label="IRA"
                    name="ira"
                    type="number"
                    inputProps={{
                        maxLength: 10,
                        step: "0.1"
                    }}
                    onChange={(e) => setira(parseFloat(e.target.value))}
                />
                {/* <TextField 
                    required
                    fullWidth
                    margin="normal"
                    label="Curso"

                    id="curso"
                    name="curso"
                    onChange={(event)=>setCurso(event.target.value)}
                    
                /> */}

                <FormControl sx={{marginTop:2, width:"100%"}} required>
                    <InputLabel id="select-curso-label">Curso</InputLabel>
                    <Select
                        labelId="select-curso-label"
                        label="Curso"
                        value={curso}
                        onChange={(event)=>setCurso(event.target.value)}
                    >
                        <MenuItem value="ES">ES</MenuItem>
                        <MenuItem value="CC">CC</MenuItem>
                        <MenuItem value="SI">SI</MenuItem>
                        <MenuItem value="EC">EC</MenuItem>
                        <MenuItem value="DD">DD</MenuItem>
                        <MenuItem value="RC">RC</MenuItem>

                    </Select>
                </FormControl>

                {/* <FormControl sx={{mt:2,ml:2}} component="fieldset" variant="standard">
                    <FormLabel component="legend" sx={{fontSize:12,mb:2}}>Áreas de Interesse</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={cg} name="cg" onClick={handleCheckbox} />} label="Computação Gráfica" />
                        <FormControlLabel control={<Checkbox checked={mc} name="mc" onClick={handleCheckbox}/>} label="Matemática Computacional" />
                        <FormControlLabel control={<Checkbox checked={al} name="al" onClick={handleCheckbox}/>} label="Algoritmos" />
                        <FormControlLabel control={<Checkbox checked={es} name="es" onClick={handleCheckbox}/>} label="Engenharia de Software"/>
                    </FormGroup>
                </FormControl> */}

                <Box sx={{display:"flex",justifyContent:"center",mt:2}}>
                    <Button
                        variant="contained"
                        type="submit"
                        // onClick={handleSubmit}
                    >
                        Cadastrar
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default Cadastrar