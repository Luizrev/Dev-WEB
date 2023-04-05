const SaveData = () => {
    const saveData = () => {
        const aluno = {nome:"Luiz",curso:"Ciencia da computação",matricula:"485348"}
        //sessionStorage.setItem(aluno.matricula,JSON.stringify(aluno))
        localStorage.setItem(aluno.matricula,JSON.stringify(aluno))
    }
    return(
        <>
            <h1>Salvando dados...</h1>
            {saveData()}
        </>
    )
}

const LoadData = () => {
    const loadData = () => {
        const aluno = JSON.parse(localStorage.getItem("485348"))
        return (
            <>
                <h3>Nome: {aluno.nome}</h3>
                <h3>Curso: {aluno.curso}</h3>
            </>
        )
    }
    return (
        <>
            <h1>Carregando dados</h1>
            {loadData()}
        </>
    )
}

export  {SaveData,LoadData}