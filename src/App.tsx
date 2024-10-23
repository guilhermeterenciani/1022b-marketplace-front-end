import { useEffect, useState } from 'react'
import './App.css'

// Tipo para produtos
type ProdutoType = {
  id: number,
  nome: string,
  preco: string,
  descricao: string,
  imagem: string
}

// Tipo para usuários
type UsuarioType = {
  id: number,
  name: string,
  email: string,
  created_at: string,
  updated_at: string
}

function App() {
  const [nome, setNome] = useState("")
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([])

  // useEffect para carregar produtos e usuários
  useEffect(() => {
    setNome("Aulaine UA")

    // Buscar os produtos
    fetch("https://one022b-marketplace-1lh5.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))

    // Buscar os usuários
    fetch("https://one022b-marketplace-1lh5.onrender.com/usuarios")
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
  }, [])

  return (
    <>

      {/* Listagem de Produtos */}
      <div className="produtos-container">
        <h1>{nome}</h1>
        {
          produtos.map(produto => (
            <div key={produto.id} className="produto-item">
              <h2>{produto.nome}</h2>
              <div className='container-imagem'>
                <img className='imagem-prod' src={produto.imagem} alt="Imagem do produto" />
              </div>
              <p className='preco-prod'>{produto.preco}</p>
              <p className='desc-prod'>{produto.descricao}</p>
              <p className='compre-agora'>Compre Agora</p>
            </div>
          ))
        }
      </div>

      {/* Listagem de Usuários */}
      <div className="usuarios-container">
  <h2>Usuários</h2>
  <table className="usuarios-tabela">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Criado em</th>
        <th>Atualizado em</th>
      </tr>
    </thead>
    <tbody>
      {usuarios.map(usuario => (
        <tr key={usuario.id}>
          <td>{usuario.name}</td>
          <td>{usuario.email}</td>
          <td>{new Date(usuario.created_at).toLocaleDateString()}</td>
          <td>{new Date(usuario.updated_at).toLocaleDateString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </>
  )
}

export default App