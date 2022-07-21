import { useState } from "react";


function App() {

  const [title, setTitle] = useState("Hello world 3");
  const [showContent, setShowContent] = useState(false);

  function handleTitle() {
    setTitle("O estado foi alterado");
  }

  function handleContent() {
    setShowContent(!showContent)
  }


  return (
    <div>
      <h1>{title}</h1>
      <ExclusiveContent showContent={showContent} />
      <button onClick={handleContent}>{showContent ? 'Clique para esconder o conteudo' : 'Clique para exibir o conteudo'}</button>
      &nbsp;
      <button onClick={handleTitle}>Alterar o titulo </button>
    </div>
  );
}

function ExclusiveContent(props) {
  return (
    <>
      {props.showContent && <h2>CONTEUDO DESCOBERTO</h2>}
    </>
  )
}



export default App;
