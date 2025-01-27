import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './App.css'

type ExercicioType = {
  id:number,
  nome:string,
  descricao:string,
  imagem:string
}
function App() {
  const [exercicios, setExercicios] = useState<ExercicioType[]>([])
  //useEffect(O QUe fazer, Quando Fazer)
  useEffect(()=>{
    fetch("http://localhost:8000/exercicios")
    .then(resposta=>resposta.json())
    .then(dados=>setExercicios(dados))
  },[])
  function handleExcluir(id:number){
    fetch(`http://localhost:8000/exercicios/${id}`,{
      method:"DELETE"
    })
    .then(resposta=>{
      if(resposta.status==200){
        alert("Excluído com sucesso")
        window.location.reload()
      }
      else{
        alert("Erro ao excluir")
      }
    })
  }

  return (
    <>  
      <main className="container-exercicios">
        {exercicios.map(prod=>{
          return(
            <div key={prod.id} className="exercicio-item">
              <h1>{prod.nome}</h1>
              <img src={prod.imagem} alt="Imagem de celular" />
              <p>{prod.descricao}</p>
              <button onClick={()=>{handleExcluir(prod.id)}}>Excluir</button>
              <Link to={`/alterar-exercicio/${prod.id}`}>Alterar</Link>
            </div>
          )
        })}
      </main>
      
    </>
  )
}

export default App