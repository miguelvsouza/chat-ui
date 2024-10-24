import dayjs from "dayjs"
import { Check, CheckCheck } from "lucide-react"

export interface IMessageProps {
  sendAt: Date
  sendByMe: boolean
  status?: "sent" | "delivered" | "read"
  content: string
}

export function Message({ content, sendByMe, sendAt, status }: IMessageProps) {
  const sendAtFormatted = dayjs(sendAt).format("HH[h]mm")

  if (sendByMe) {
    return (
      <div className="max-w-[620px] ml-auto flex items-center gap-2">
        <span className="text-xs text-zinc-400">{sendAtFormatted}</span>
        <div className="bg-[#875ef8] text-zinc-200 text-sm rounded-md py-2 px-3">
          <span>{content}</span>
        </div>
        <div>
          {status && status === "sent" && <Check size={20} strokeWidth={1.5} />}
          {status && status === "delivered" && (
            <CheckCheck size={20} strokeWidth={1.5} />
          )}
          {status && status === "read" && (
            <CheckCheck className="text-sky-400" size={20} strokeWidth={1.5} />
          )}
        </div>
      </div>
    )
  }

  if (!sendByMe) {
    return (
      <div className="max-w-[620px] mr-auto flex items-center gap-2">
        <div className="bg-zinc-700 text-zinc-200 text-sm rounded-md py-2 px-3">
          <span>{content}</span>
        </div>
        <span className="text-xs text-zinc-400">{sendAtFormatted}</span>
      </div>
    )
  }
}
