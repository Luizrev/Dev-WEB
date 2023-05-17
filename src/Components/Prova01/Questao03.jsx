import React, { useState, useEffect } from 'react';

const Questao03 = () => {
  const [maiorPopulacao, setMaiorPopulacao] = useState('');//variáveis de estado que vão checar caso haja alguma alteração nas populações
  const [menorPopulacao, setMenorPopulacao] = useState('');

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
      .then((response) => response.json())
      .then((data) => {
        let maiorPop = 0;
        let menorPop = Infinity;
        let capitalMaiorPop = '';
        let capitalMenorPop = '';

        data.forEach((country) => {//aqui vai checar em cada país buscando a maior e menor população, assim que encontra pega as capitais
          const population = country.population;

          if (population > maiorPop) {
            maiorPop = population;
            capitalMaiorPop = country.capital[0];
          }

          if (population < menorPop) {
            menorPop = population;
            capitalMenorPop = country.capital[0];
          }
        });

        setMaiorPopulacao(capitalMaiorPop);//chamadas de função para que seja atualizada e renderizado na tela as capitais
        setMenorPopulacao(capitalMenorPop);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Questão 03</h1>
      <p>Capital do país com maior população: {maiorPopulacao}</p>
      <p>Capital do país com menor população: {menorPopulacao}</p>
    </div>
  );
};

export default Questao03;
