import { useEffect, useState } from 'react';
import './App.css';

type ProdutoType = {
  id: number,
  nome: string,
  descricao: string,
  preco: string,
  imagem: string,
};

type UsuarioType = {
  id: number,
  nome: string,
  email: string,
};

function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([]);

  // Requisição para produtos
  useEffect(() => {
    fetch("https://one022b-marketplace-1lh5.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados));
  }, []);

  // Requisição para usuários
  useEffect(() => {
    fetch("https://one022b-marketplace-1lh5.onrender.com/usuarios")
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados));
  }, []);

  return (
    <>
      <div className="container-produtos">
        <h2>Produtos</h2>
        {produtos.map(prod => (
          <div key={prod.id} className="produto-item">
            <h1>{prod.nome}</h1>
            <img src={prod.imagem} alt="Imagem do Produto" className="src" />
            <p>{prod.preco}</p>
            <p>{prod.descricao}</p>
          </div>
        ))}
      </div>

      <div className="container-usuarios">
        <h2>Usuários</h2>
        {usuarios.map(usuario => (
          <div key={usuario.id} className="usuario-item">
            <h1>{usuario.nome}</h1>
            <p>{usuario.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
