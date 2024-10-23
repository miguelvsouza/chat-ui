import {
  Paperclip,
  Phone,
  Search,
  SendHorizonal,
  Smile,
  Video,
} from "lucide-react"
import { useEffect, useRef } from "react"

export function App() {
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
              className="rounded-full h-8 w-8"
            />

            <div className="flex-1">
              <h3 className="font-semibold leading-tight ">Miguel Souza</h3>
              <span className="text-xs">online</span>
            </div>
          </div>

          <div className="bg-zinc-700 rounded-md flex items-center">
            <button className="rounded-md px-3 py-2 hover:bg-zinc-600">
              <Video className="text-zinc-300 h-5 w-5" />
            </button>
            <div className="border-r h-5" />
            <button className="rounded-md px-3 py-2 hover:bg-zinc-600">
              <Phone className="text-zinc-300 h-5 w-5" />
            </button>
          </div>
          <button className="rounded-full p-2 hover:bg-zinc-700">
            <Search className="text-zinc-300 h-5 w-5" />
          </button>
        </header>

        <main
          ref={mainRef}
          className="flex-1 grid grid-rows-[1fr_auto] overflow-y-auto pr-2"
        >
          <div className="flex-1"></div>
          <div className="grid grid-flow-row auto-rows-min gap-2">
            <div className="bg-zinc-700 w-[300px] h-[100px] rounded-md"></div>
            <div className="bg-emerald-800 w-[300px] h-[100px] rounded-md ml-auto"></div>
            <div className="bg-zinc-700 w-[300px] h-[100px] rounded-md"></div>
            <div className="bg-emerald-800 w-[300px] h-[100px] rounded-md ml-auto"></div>
            <div className="bg-zinc-700 w-[300px] h-[100px] rounded-md"></div>
            <div className="bg-emerald-800 w-[300px] h-[100px] rounded-md ml-auto"></div>
            <div className="bg-zinc-700 w-[300px] h-[100px] rounded-md"></div>
            <div className="bg-emerald-800 w-[300px] h-[100px] rounded-md ml-auto"></div>
          </div>
        </main>

        <form className="flex items-center justify-between gap-2 px-2 border rounded-lg">
          <div>
            <button
              type="button"
              className="rounded-full p-2 hover:bg-zinc-700"
            >
              <Smile className="text-zinc-300 h-5 w-5" />
            </button>
            <button
              type="button"
              className="rounded-full p-2 hover:bg-zinc-700"
            >
              <Paperclip className="text-zinc-300 h-5 w-5" />
            </button>
          </div>
          <input
            type="text"
            autoFocus
            className="flex-1 py-3 px-1 bg-zinc-800 focus:border-none outline-none"
            placeholder="Mensagem"
          />
          <button className="rounded-full p-2 hover:bg-zinc-700">
            <SendHorizonal className="text-zinc-300 h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  )
}
