import { Phone, Search, Video } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { IMessageProps, Message } from "./message"
import { messages as initialMessages } from "./data/messages"
import { SendMessage } from "./send-message"

export function Chat() {
  const mainRef = useRef<HTMLDivElement | null>(null)
  const [messages, setMessages] = useState(initialMessages)

  function scrollToBottom() {
    if (mainRef.current) {
      mainRef.current.scrollTop = mainRef.current.scrollHeight
    }
  }

  const handleSendMessage = (newMessage: string) => {
    const newMessageObj: IMessageProps = {
      sendAt: new Date(),
      sendByMe: true,
      status: "sent",
      content: newMessage,
    }

    setMessages((prevMessages) => [...prevMessages, newMessageObj]) // Update messages state with the new message
  }

  // Quando o componente for montado ou quando houver uma nova mensagem, levar até a mensagem mais atual.
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="w-1/2 h-full space-y-2 flex-col flex flex-1 p-4">
      <header className="flex items-center justify-between gap-2 border-b border-b-zinc-600 pb-3">
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
        </div>

        <button className="rounded-md px-4 py-3 hover:bg-zinc-700">
          <Search className="text-zinc-50" size={20} strokeWidth={1} />
        </button>

        <div className="bg-zinc-700 rounded-md flex items-center">
          <button className="rounded-md px-4 py-3 hover:bg-zinc-600">
            <Video className="text-zinc-50" size={20} strokeWidth={1} />
          </button>
          <div className="border-r border-r-zinc-600 h-6" />
          <button className="rounded-md px-4 py-3 hover:bg-zinc-600">
            <Phone className="text-zinc-50" size={20} strokeWidth={1} />
          </button>
        </div>

        <button className="bg-[#875ef8] font-semibold rounded-md px-5 py-2.5 hover:bg-[#875ef8]/80">
          Finalizar
        </button>
      </header>

      <main
        ref={mainRef}
        className="flex-1 grid grid-rows-[1fr_auto] overflow-y-auto mr-[-8px]"
      >
        <div className="flex-1" />
        <div className="grid grid-flow-row auto-rows-min gap-1">
          {messages.map((message, index) => (
            <Message key={index} {...message} />
          ))}
        </div>
      </main>

      <SendMessage onSendMessage={handleSendMessage} />
    </div>
  )
}
