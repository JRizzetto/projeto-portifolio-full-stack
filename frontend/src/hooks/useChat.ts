import { Id } from "@core"
import useLocalStorage from "./useLocalStoege"
import Mensagem from "@/model/Mensagem"
import conversar from "@/functions/chat"

export default function useChat() {
	const [chatId] = useLocalStorage<string>("chatId", Id.gerar())
    const [mensagens, setMensagens] = useLocalStorage<Mensagem[]>("mensagens", [])

    async function adicionarMensagem(texto: string) {
        const novaMensagem: Mensagem = {
            id: Id.gerar(),
            texto,
            autor: "Visitante",
            lado: "direito",
            icone: null,
        }

        setMensagens((msgs) => [...msgs, novaMensagem])

        const resposta = await conversar(chatId, novaMensagem)
        console.log("Resposta do webhook:", resposta)

        if(!resposta) return

        const mensagemResposta: Mensagem = {
            id: Id.gerar(),
            texto: resposta,
            autor: "Assistente",
            lado: "esquerdo",
            icone: null,
        }
        
        setMensagens((msgs) => [...msgs, mensagemResposta])
    }

    function limparMensagens() {
        setMensagens([])
    }

	return {
		chatId,
        mensagens,
        adicionarMensagem,
        limparMensagens,
	}
}
