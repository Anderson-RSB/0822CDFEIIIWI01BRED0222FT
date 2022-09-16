
// É possível importar o componente sempre que precisar...
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";
import Item from "./componentes/Item";

/*
  Funções são Componentes, 
  sendo assim retornam HTML (JavaScript XML)
*/
function App() {

  return (
    <>
      <Cabecalho />

      <h1>Title</h1>
      <p>Description</p>
      <ul>
        <Item
          concluido="não"
          valor="Rodrigo Ferreira"
          descricao="Aluno"
        />
        <Item
          concluido="sim"
          valor="Ibson Junior"
          descricao="Aluno"
        />
        <Item
          concluido="não"
          valor="Jeff Mendes"
          descricao="Aluno"
        />
      </ul>

      <Rodape />
    </>
  );
}

export default App
