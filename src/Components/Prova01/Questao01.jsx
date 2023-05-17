// import React, { useState, useEffect } from 'react';

// const Questao01A = () => {
//   const alunos = [
//     { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
//     { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
//     { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } }
//   ];

//   const [medias, setMedias] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const calcularMedias = () => {
//       const mediasCalculadas = alunos.map((aluno) => (aluno.notas.ap1 + aluno.notas.ap2) / 2);
//       setMedias(mediasCalculadas);
//       setLoading(false);
//     };

//     calcularMedias();
//   }, []);

//   const renderizarAlunosAcimaDaMedia = () => {
//     return alunos.map((aluno, index) => {
//       if (medias[index] >= 6.0) {
//         return <p key={index}>{aluno.nome}</p>;
//       }
//       return null;
//     });
//   };

//   return (
//     <div>
//       <h1>Componente Questao01A</h1>
//       {loading ? <p>Calculando médias...</p> : renderizarAlunosAcimaDaMedia()}
//       <Questao01B alunos={alunos} setMedias={setMedias} />
//     </div>
//   );
// };

// function Questao01B({ alunos, setMedias }) {
//   useEffect(() => {
//     const calcularMedias = () => {
//       const mediasCalculadas = alunos.map((aluno) => (aluno.notas.ap1 + aluno.notas.ap2) / 2);
//       setMedias(mediasCalculadas);
//     };

//     calcularMedias();
//   }, [alunos, setMedias]);

//   return null;
// }

// export default Questao01A;

import React, { useState } from 'react';

const Questao01Y = ({ alunos, onMediaChange }) => {
  React.useEffect(() => {
    const medias = alunos.map((aluno) => (aluno.notas.ap1 + aluno.notas.ap2) / 2);
    onMediaChange(medias);
  }, [alunos, onMediaChange]); //aqui será checado se ouveram alterações nas medias

  return null; // não é necessário renderizar nada nesse componente 
}

function Questao01X() {
  const alunos = [
    { nome: 'Sicrano', notas: { ap1: 8.4, ap2: 5.4 } },
    { nome: 'Beltrano', notas: { ap1: 6.7, ap2: 3.5 } },
    { nome: 'Fulano', notas: { ap1: 7.3, ap2: 9.2 } },
  ];

  const [medias, setMedias] = useState([]); //var de estado atualizada quando a função handleMediaChange é chamada no componente Questao01Y.
  const [loading, setLoading] = useState(true); // var de estado que enquanto as médias estão sendo calculadas, será definida como true.

  function handleMediaChange(novasMedias) {
    setMedias(novasMedias);
    setLoading(false);
  }

  function renderAlunosAbaixoDaMedia() {
    const alunosAbaixoDaMedia = alunos.filter((_, index) => medias[index] <= 5.0);
    return alunosAbaixoDaMedia.map((aluno) => <p key={aluno.nome}>{aluno.nome}</p>);
  }

  return (
    <div>
      <h2>Alunos abaixo da média:</h2>
      {loading ? <p>Carregando...</p> : renderAlunosAbaixoDaMedia()}
      <Questao01Y alunos={alunos} onMediaChange={handleMediaChange} />
    </div>
  );
}

export default Questao01X;

