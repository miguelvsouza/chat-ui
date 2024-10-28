import { Mic, Paperclip, SendHorizonal, Smile } from "lucide-react"
import { useState, KeyboardEvent, useRef, useEffect, FormEvent } from "react"

interface ISendMessageProps {
  onSendMessage: (message: string) => void
}

export function SendMessage({ onSendMessage }: ISendMessageProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [message, setMessage] = useState("")

  function adjustTextareaHeight() {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key !== "Enter") return // Se não for Enter, não faz nada
    if (e.shiftKey) return // Se for Shift + Enter permite a quebra de linha

    handleSubmit(e)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (message.trim()) {
      onSendMessage(message.trim())

      setMessage("")
      adjustTextareaHeight()
    }
  }

  // Ajusta a altura da textarea toda vez que message é alterado
  useEffect(() => {
    adjustTextareaHeight()
  }, [message])

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between gap-2 px-2 border border-zinc-600 rounded-lg"
    >
      <div>
        <button type="button" className="rounded-md p-2 hover:bg-zinc-700">
          <Smile className="text-zinc-50" size={20} strokeWidth={1} />
        </button>
        <button type="button" className="rounded-md p-2 hover:bg-zinc-700">
          <Paperclip className="text-zinc-50" size={20} strokeWidth={1} />
        </button>
      </div>

      <textarea
        ref={textareaRef}
        className="flex-1 py-3 px-1 bg-zinc-900 max-h-44 focus:outline-none resize-none"
        placeholder="Mensagem"
        rows={1}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />

      <button className="rounded-md p-2 hover:bg-zinc-700">
        {message.length > 0 ? (
          <SendHorizonal className="text-zinc-50" size={20} strokeWidth={1} />
        ) : (
          <Mic className="text-zinc-50" size={20} strokeWidth={1} />
        )}
      </button>
    </form>
  )
}
