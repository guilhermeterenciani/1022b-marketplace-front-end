import { ChangeEvent, FormEvent, useState } from "react";

export default function CadastroProduto(){
    const [id,setId] = useState("")
    function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei cadastrar produtos");
        //Pegar os valores dos campos de input e colocar um objeto do tipo produto
        //Devo cadastrar no banco utilizando o BackEnd
        //FETCH - > PRODUTO
    }
    function handleID(event:ChangeEvent:HTMLInputElement: any){
        setId(event.target.value);
    }

    return(
        <>
        <h1>Tela  de Cadastro de Produto</h1>
        <form onSubmit={handleForm}>
            <div>
            <label htmlFor="id">ID</label>
            <input type="text" name="id" onChange={handleID} />
            </div>
            
            <div>
            <label htmlFor="nome">nome</label>
            <input type="text" name="nome" />
            </div>
            
            <div>
            <label htmlFor="descricao">descricao</label>
            <input type="text" name="descricao" />
            </div>
            
            <div>
            <label htmlFor="preco">preço</label>
            <input type="text" name="preco" />
            </div>
            
            <div>
            <label htmlFor="imagem">imagem</label>
            <input type="text" name="imagem" />
            </div>
            
            <div>
            <input type="submit" value="Cadastrar" />
            </div>
        </form>
    </>
    )
}