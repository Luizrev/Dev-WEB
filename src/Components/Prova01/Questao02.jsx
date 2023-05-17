import React, { useState } from 'react';

const Questao02 = () => {
  const [flag, setflag] = useState(false); //inicializando a var de estado flag como false 

  const toggleflag = () => {// função "interruptor", que vai trocar o estado da var flag
    setflag(!flag);
  };

  //aqui resolvi usar as imagens do pokemon pidgeot
  const imagemFrente = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png';
  const imagemCostas = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png';

  return (
    <div>
      <h1>Questão 02</h1>
      {/* aqui o condicional que dependendo do valor da flag exibe a img de frente ou costas */}
      <img src={flag ? imagemCostas : imagemFrente} alt="Pokemon" />
      <button onClick={toggleflag}>Virar</button>
    </div>
  );
};

export default Questao02;
