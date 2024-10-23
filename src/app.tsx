import {
  Mic,
  Paperclip,
  Phone,
  Search,
  SendHorizonal,
  Smile,
  Video,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function App() {
  const [message, setMessage] = useState("")

  const mainRef = useRef<HTMLDivElement | null>(null)

  function scrollToBottom() {
    if (mainRef.current) {
      mainRef.current.scrollTop = mainRef.current.scrollHeight
    }
  }

  // Quando o componente for montado, levar até a mensagem mais atual.
  useEffect(() => {
    scrollToBottom()
  }, [])

  return (
    <div className="bg-zinc-900 text-zinc-50 h-screen flex items-center justify-center antialiased">
      <div className="border rounded-lg bg-zinc-800 w-[540px] h-[780px] space-y-2 flex-col flex p-4">
        <header className="flex items-center justify-between gap-1 border-b pb-2">
          <div className="space-x-4 flex-1 flex items-center">
            <img
              src="https://github.com/miguelvsouza.png"
              alt="Imagem de perfil do Miguel Souza no Github"
              className="rounded-full h-12 w-12"
            />

            <div className="flex-1">
              <h3 className="font-semibold leading-tight ">Miii</h3>
              <span className="text-xs">online</span>
            </div>
          </div>

          <div className="bg-zinc-700 rounded-md flex items-center">
            <button className="rounded-md px-4 py-3 hover:bg-zinc-600">
              <Video className="text-zinc-50" size={20} strokeWidth={1} />
            </button>
            <div className="border-r h-6" />
            <button className="rounded-md px-4 py-3 hover:bg-zinc-600">
              <Phone className="text-zinc-50" size={20} strokeWidth={1} />
            </button>
          </div>
          <button className="rounded-md p-2 hover:bg-zinc-700">
            <Search className="text-zinc-50" size={20} strokeWidth={1} />
          </button>
        </header>

        <main
          ref={mainRef}
          className="flex-1 grid grid-rows-[1fr_auto] overflow-y-auto pr-2"
        >
          <div className="flex-1" />
          <div className="grid grid-flow-row auto-rows-min gap-1">
            <div className="max-w-[380px] mr-auto flex items-center gap-2">
              <div className="bg-zinc-700 text-zinc-200 rounded-md py-2 px-3">
                <span>Oiii, Ga!!</span>
              </div>
              <span className="text-xs text-zinc-400">18h16</span>
            </div>

            <div className="max-w-[380px] mr-auto flex items-center gap-2">
              <div className="bg-zinc-700 text-zinc-200 rounded-md py-2 px-3">
                <span>Tudo bem?</span>
              </div>
              <span className="text-xs text-zinc-400">18h16</span>
            </div>

            <div className="max-w-[380px] mr-auto flex items-center gap-2">
              <div className="bg-zinc-700 text-zinc-200 rounded-md py-2 px-3">
                <span>Já chegou em casa?</span>
              </div>
              <span className="text-xs text-zinc-400">18h16</span>
            </div>

            <div className="max-w-[380px] ml-auto flex items-center gap-2">
              <span className="text-xs text-zinc-400">18h16</span>
              <div className="bg-sky-800 text-zinc-200 rounded-md py-2 px-3">
                <span>Oii, Mii!! Tdo bem sim. Cheguei agora</span>
              </div>
            </div>
          </div>
        </main>

        <form className="flex items-center justify-between gap-2 px-2 border rounded-lg">
          <div>
            <button type="button" className="rounded-md p-2 hover:bg-zinc-700">
              <Smile className="text-zinc-50" size={20} strokeWidth={1} />
            </button>
            <button type="button" className="rounded-md p-2 hover:bg-zinc-700">
              <Paperclip className="text-zinc-50" size={20} strokeWidth={1} />
            </button>
          </div>
          <input
            type="text"
            autoFocus
            className="flex-1 py-3 px-1 bg-zinc-800 focus:outline-none"
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="rounded-md p-2 hover:bg-zinc-700">
            {message.length > 0 ? (
              <SendHorizonal
                className="text-zinc-50"
                size={20}
                strokeWidth={1}
              />
            ) : (
              <Mic className="text-zinc-50" size={20} strokeWidth={1} />
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
