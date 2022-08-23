import { useState, useEffect } from 'react'


function App() {

  // Responsável pelo valores / dados
  // Acompanhar o estado dos valores... se mudar ele vai renderizar novamente.
  let [numero, definirNumero] = useState(
    (numero) => {
      console.log('useState')
      return numero = 0;
    }
  );

  // Baseado em uma condição, 
  // irá disparar uma função / rotina.
  useEffect(
    // Função que será disparada...
    () => {
      console.log('useEffect')
    },
    // É a condição para disparar a função...
    [numero]
  )

  // Responsável pelo componente

  console.log('Renderizei o componente');

  return (
    <>
      <p>{numero}</p>
      <button
        onClick={() => definirNumero(numero + 1)}
      >
        + 1
      </button>
    </>
  )
}

export default App
