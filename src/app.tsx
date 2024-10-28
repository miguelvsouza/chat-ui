import { User } from "lucide-react"
import { Chat } from "./components/chat"

export function App() {
  return (
    <div className="bg-zinc-900 text-zinc-50 h-screen flex antialiased">
      <div className="w-[400px] flex flex-col items-center border-r border-r-zinc-600">
        <div className="w-full flex items-center justify-between border-b border-b-zinc-600 px-4 py-4">
          <h3 className="font-bold tracking-tight text-2xl">Atendimentos</h3>
          <button className="bg-zinc-700 rounded-md px-4 py-3 hover:bg-zinc-600">
            <User className="text-zinc-50" size={20} strokeWidth={1} />
          </button>
        </div>
        <div className="w-full border-b border-b-zinc-600 flex justify-center items-center p-4">
          <div className="flex flex-col items-center gap-2">
            <p className="flex items-end justify-center gap-2 font-semibold text-lg">
              <span className="font-bold text-2xl text-[#875ef8]">2</span>{" "}
              clientes aguardando
            </p>
            <div className="flex items-center justify-center gap-2">
              <button className="bg-[#875ef8] font-semibold rounded-md px-5 py-3 hover:bg-[#875ef8]/80">
                Atender
              </button>

              <button className="bg-zinc-700 font-semibold rounded-md px-5 py-3 hover:bg-zinc-600">
                Mensagem ativa
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full p-1">
          <div className="w-full h-[84px] rounded-lg flex items-center justify-between p-2 hover:bg-zinc-800 cursor-pointer">
            <div className="space-x-4 flex-1 flex items-center">
              <img
                src="https://github.com/github.png"
                alt="Imagem de perfil do Github no Github"
                className="rounded-full h-12 w-12"
              />

              <div className="flex-1">
                <h3 className="font-semibold leading-tight ">Fulano de Tal</h3>
                <span className="text-xs">online</span>
              </div>

              <span className="rounded-full bg-[#875ef8] text-xs font-semibold px-2 py-1">
                Nota Fiscal
              </span>
            </div>
          </div>

          <div className="w-full h-[84px] rounded-lg flex items-center justify-between p-2 hover:bg-zinc-800 cursor-pointer">
            <div className="space-x-4 flex-1 flex items-center">
              <img
                src="https://github.com/miguelvsouza.png"
                alt="Imagem de perfil do Miguel Souza no Github"
                className="rounded-full h-12 w-12"
              />

              <div className="flex-1">
                <h3 className="font-semibold leading-tight ">Miguel Souza</h3>
                <span className="text-xs">online</span>
              </div>

              <span className="rounded-full bg-[#875ef8] text-xs font-semibold px-2 py-1">
                Financeiro
              </span>
            </div>
          </div>
        </div>
      </div>
      <Chat />
      <div className="w-[400px] border-l border-l-zinc-600">
        <div className="w-full border-b border-b-zinc-600 px-4 py-[1.36rem]">
          <h3 className="font-bold tracking-tight text-2xl">Detalhes</h3>
        </div>

        <div className="space-y-4 p-4">
          <div className="space-y-2">
            <h3 className="font-semibold tracking-tight text-xl">
              Informações de contato
            </h3>
            <div className="space-y-1 text-sm text-zinc-50">
              <p>
                <b>Nome:</b> Miguel Souza
              </p>

              <p>
                <b>Telefone:</b> +55 31 98765-4321
              </p>

              <p>
                <b>E-mail:</b> miguel.souza@qibz.com.br
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold tracking-tight text-xl">
              Informações comerciais
            </h3>
            <div className="space-y-1 text-sm text-zinc-50">
              <p>
                <b>Empresa:</b> Qibz Ltda.
              </p>

              <p>
                <b>CNPJ:</b> 56.895.757/0001-45
              </p>

              <p>
                <b>E-mail:</b> oi@qibz.com.br
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
