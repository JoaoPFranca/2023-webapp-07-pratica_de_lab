import { useState } from 'react'
import './App.css'

const AppNavBar = () =>{
  return(
    <div>
      <h1>Lista de Tarefas</h1>
    </div>
  )
}

const AppEntrada = (props: any) => {
  
  return(
    <div className="card">
      <label>Tarefa:</label>
      <input type="texto" placeholder='Digite algo' value={props.texto} onChange={props.mudar}/>
      
    </div>
  )
}

const AppCloneEntrada = (props: any) =>{
  return(
    <label>{props.texto}</label>
  )
}

function App() {

  const [entrada, setEntrada] = useState ("")

  return (
    <>
    <main>
        <AppNavBar/>
        <AppEntrada texto={entrada} mudar={(e: any) => setEntrada(e.target.value)}/>
        <AppCloneEntrada texto = {entrada}/>
      </main>
    </>
  )
}

export default App