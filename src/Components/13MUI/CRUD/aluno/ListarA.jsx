import { TableContainer, Typography, Table, Paper, TableHead, TableBody, TableRow, TableCell, Box } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

const Listar = () => {

    /*const alunos = [
        { id: 0, nome: "Vito Corleone", curso: "SI", titulacao: "MEST" },
        { id: 1, nome: "Michael Corleone", curso: "DD", titulacao: "GRAD" },
        { id: 2, nome: "Luca Brasi", curso: "SI", titulacao: "MEST" },
        { id: 3, nome: "Kay Adams", curso: "SI", titulacao: "DOUT" },
        { id: 4, nome: "Peter Clemenza", curso: "CC", titulacao: "MEST" }
    ]*/

    const [alunos,setalunos] = useState([])

    const mediaIraTurma = () => {
        const total = alunos.reduce((acc,curr) => acc + curr,0);
        const avg = total/alunos.length;
        return avg;
    }

    useEffect(
        ()=>{
            axios.get("http://localhost:3005/alunos/listar")
            .then(
                (response)=>{
                    //console.log(response)
                    setalunos(response.data)
                }
            )
            .catch(error=>console.log(error))
        }
        ,
        []
    )

    function deletealunoById(id) {
        if(window.confirm("Deseja Excluir ? " + id)){
            //alert("aluno " + id + " excluído com sucesso!")
            axios.delete(`http://localhost:3005/alunos/remover/${id}`)
            .then((response)=>{
                const resultado = alunos.filter(alu => alu._id != id)
                setalunos(resultado)
            })
            .catch(error=>console.log(error))
        }
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Listar aluno
            </Typography>
            <TableContainer component={Paper} sx={{mt:4,mb:4}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>IRA</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            alunos.map(
                                (aluno) => {
                                    return (
                                        <StyledTableRow key={aluno._id}>
                                            <StyledTableCell>{aluno._id}</StyledTableCell>
                                            <StyledTableCell>{aluno.nome}</StyledTableCell>
                                            <StyledTableCell>{aluno.curso}</StyledTableCell>
                                            <StyledTableCell>{aluno.ira}</StyledTableCell>
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton aria-label="edit" color="primary" component={Link} to={`/editaraluno/${aluno._id}`}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton aria-label="delete" color="error" onClick={()=>deletealunoById(aluno._id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Box>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    )
                                }
                            )
                        }
                        <StyledTableRow sx={{color:"red"}} >{alunos.filter((aluno)=>{if(aluno.ira < mediaIraTurma()){
                            return (aluno.nome)
                        }})}</StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export default Listar