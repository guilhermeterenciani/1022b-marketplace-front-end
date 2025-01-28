import { useParams } from "react-router-dom";
import { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function AlterarExercicio() {
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://one022b-marketplace-1lh5.onrender.com/exercicios/${id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setDescricao(dados.descricao)
                setNome(dados.nome)
                setImagem(dados.imagem)
            })
    }, [])
    const navigate = useNavigate();
    const [descricao, setDescricao] = useState("")
    const [nome, setNome] = useState("")
    const [imagem, setImagem] = useState("")

    function handleForm(event: FormEvent) {
        event.preventDefault();
        console.log("Tentei cadastrar exercicios");
        const exercicio = {
            nome: nome,
            descricao: descricao,
            imagem: imagem
        }
        fetch(`https://one022b-marketplace-1lh5.onrender.com/exercicios/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(exercicio)
        }).then(response => {
            if (response.status === 200) {
                alert("Exercicio alterado com sucesso")
                navigate("/")
            }
            else {
                alert("Erro ao alterar exercicio")
            }
        })
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
            <main>
                <div>Alterar Exercicio {id}</div>
                <form onSubmit={handleForm}>
                    <div>
                        <label htmlFor="id">id</label>
                        <input type="text" name="id" value={id} readOnly />
                    </div>
                    <div>
                        <label htmlFor="nome">nome</label>
                        <input type="text" name="nome" value={nome} onChange={handleNome} />
                    </div>
                    <div>
                        <label htmlFor="descricao">descricao</label>
                        <input type="text" name="descricao" value={descricao} onChange={handleDescricao} />
                    </div>
                    <div>
                        <label htmlFor="imagem">imagem</label>
                        <input type="text" name="imagem" value={imagem} onChange={handleImagem} />
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

export default AlterarExercicio;