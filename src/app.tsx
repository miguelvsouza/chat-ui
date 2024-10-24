import { Chat } from "./components/chat"

export function App() {
  return (
    <div className="bg-zinc-900 text-zinc-50 h-screen flex antialiased">
      <div className="w-[400px] flex flex-col items-center border-r">
        <div className="w-full border-b p-4">
          <h3 className="font-bold tracking-tight text-2xl">Atendimentos</h3>
        </div>
        <div className="w-full border-b flex justify-center items-center p-4">
          <div className="flex flex-col items-center gap-2">
            <p className="flex items-end justify-center gap-2 font-semibold text-lg">
              <span className="font-bold text-2xl text-[#875ef8]">0</span>{" "}
              clientes aguardando
            </p>
            <div className="flex items-center justify-center gap-2">
              <button className="bg-[#875ef8] rounded-md px-5 py-3 hover:bg-[#875ef8]/80">
                Atender
              </button>

              <button className="bg-zinc-700 rounded-md px-5 py-3 hover:bg-zinc-600">
                Mensagem ativa
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full p-1">
          <div className="w-full h-[84px] rounded-lg flex items-center justify-between p-2 hover:bg-zinc-800 cursor-pointer">
            <div className="space-x-4 flex-1 flex items-center">
              <img
                src="https://github.com/rocketseat.png"
                alt="Imagem de perfil do Miguel Souza no Github"
                className="rounded-full h-12 w-12"
              />

              <div className="flex-1">
                <h3 className="font-semibold leading-tight ">
                  Luciano Vianelli
                </h3>
                <span className="text-xs">online</span>
              </div>

              <span className="rounded-full bg-sky-600 text-xs font-semibold px-2 py-1">
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

              <span className="rounded-full bg-sky-600 text-xs font-semibold px-2 py-1">
                Nota Fiscal
              </span>
            </div>
          </div>
        </div>
      </div>
      <Chat />
      <div className="w-[400px] border-l">Detalhes do cliente</div>
    </div>
  )
}
