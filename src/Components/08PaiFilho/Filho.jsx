const Filho = (props) => {
    return (
        <>
            <h1>Componente Filho</h1>
            <h3>Mesada: {props.mesada}</h3>
            <button onClick={
                () => {
                    //alert("fui clicado!!!")
                    props.enviarMensagemProPai("Obrigado!!!")
                }
            }>
                Agradecer Pai
            </button>
        </>
    )
}

export default Filho