import { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroExercicio() {
    const navigate = useNavigate();
    const [id, setId] = useState("")
    const [descricao, setDescricao] = useState("")
    const [nome, setNome] = useState("")
    const [imagem, setImagem] = useState("")

    function handleForm(event: FormEvent) {
        event.preventDefault();
        console.log("Tentei cadastrar exercicios");
        const exercicio = {
            id: id,
            nome: nome,
            descricao: descricao,
            imagem: imagem
        }
        fetch("https://one022b-marketplace-1lh5.onrender.com/exercicios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(exercicio)
        }).then(response => {
            if (response.status === 200) {
                alert("Exercicio cadastrado com sucesso")
                navigate("/")
            }
            else {
                alert("Erro ao cadastrar exercicio")
            }
        })
    }
    function handleId(event: ChangeEvent<HTMLInputElement>) {
        setId(event.target.value)
    }
    function handleDescricao(event: ChangeEvent<HTMLInputElement>) {
        setDescricao(event.target.value)
    }
    function handleNome(event: ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value)
    }
    function handleImagem(event: ChangeEvent<HTMLInputElement>) {
        setImagem(event.target.value)
    }

    return (
        <>
            <main className="container">
                <h1>Tela Cadastro Exercicios</h1>
                <form onSubmit={handleForm}>
                    <div>
                        <label htmlFor="id">ID</label>
                        <input type="text" name="id" onChange={handleId} />
                    </div>
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" onChange={handleNome} />
                    </div>
                    <div>
                        <label htmlFor="descricao">Descricao</label>
                        <input type="text" name="descricao" onChange={handleDescricao} />
                    </div>
                    <div>
                        <label htmlFor="imagem">Imagem</label>
                        <input type="text" name="imagem" onChange={handleImagem} />
                        {imagem && <img className="imagem-previa-upload" src={imagem} />}
                    </div>
                    <div>
                        <input type="submit" value="Cadastrar" />
                    </div>
                </form>
            </main>

        </>
    )
}