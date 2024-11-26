import { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroUsuario(){
    const navigate = useNavigate();
    const [id,setId] = useState("")
    const [nome,setNome] = useState("")
    const [email,setEmail] = useState("")

    function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei cadastrar usuarios");
        const produto = {
            id: id,
            nome: nome,
            email: email
        }
        fetch("http://localhost:8000/usuarios",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        }).then(response => {
            if(response.status === 200){
                alert("Usuário cadastrado com sucesso")
                navigate("/")
            }
            else{
                alert("Erro ao cadastrar usuário")
            }
        })
    }
    function handleId(event:ChangeEvent<HTMLInputElement>){
        setId(event.target.value)
    }
    function handleNome(event:ChangeEvent<HTMLInputElement>){
        setNome(event.target.value)
    }
    function handleEmail(event:ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value)
    }

    return(
        <>
            <h1>Tela Cadastro Usuários</h1>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="id">id</label>
                    <input type="text" name="id" onChange={handleId} />
                </div>
                <div>
                    <label htmlFor="nome">nome</label>
                    <input type="text" name="nome" onChange={handleNome} />
                </div>
                <div>
                    <label htmlFor="descricao">descricao</label>
                    <input type="text" name="descricao" onChange={handleEmail} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </>
    )
}