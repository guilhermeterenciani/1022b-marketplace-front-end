import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './App.css'

type ExercicioType = {
  id:number,
  nome:string,
  descricao:string,
  imagem:string
}
type UsuarioType = {
  id:number,
  nome:string,
  funcao:string,
  email:string,
  foto:string
}
function App() {
  const [exercicios, setExercicios] = useState<ExercicioType[]>([])
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

  const [usuarios, setUsuarios] = useState<UsuarioType[]>([])
  useEffect(()=>{
    fetch("http://localhost:8000/usuarios")
    .then(resposta=>resposta.json())
    .then(dados=>setUsuarios(dados))
  },[])
  function handleExcluirUser(id:number){
    fetch(`http://localhost:8000/usuarios/${id}`,{
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
        {exercicios.map(exe=>{
          return(
            <div key={exe.id} className="exercicio-item">
              <h1>{exe.nome}</h1>
              <img src={exe.imagem} alt="SEM IMAGEM" />
              <p>{exe.descricao}</p>
              <button onClick={()=>{handleExcluir(exe.id)}}>Excluir</button>
              <Link to={`/alterar-exercicio/${exe.id}`}>Alterar</Link>
            </div>
          )
        })}
      </main>
      <main className='container-usuarios'>
      {usuarios.map(user=>{
          return(
            <div key={user.id} className="Usuario-item">
              <h1>{user.nome}</h1>
              <img src={user.foto} alt="SEM FOTO" />
              <p>{user.email}</p>
              <p>{user.funcao}</p>
              <button className='ExButton' onClick={()=>{handleExcluirUser(user.id)}}>Excluir</button>
              <Link className='AltButton' to={`/alterar-usuario/${user.id}`}>Alterar</Link>
            </div>
          )
        })}
      </main>
    </>
  )
}

export default App