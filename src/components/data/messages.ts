import { IMessageProps } from "../message"

export const messages: IMessageProps[] = [
  {
    sendAt: new Date("2024-10-24T08:00:00"),
    sendByMe: true,
    status: "read",
    content: "Bom dia! Tudo bem por aí?",
  },
  {
    sendAt: new Date("2024-10-24T08:02:15"),
    sendByMe: false,
    status: "read",
    content: "Bom dia! Tudo ótimo. E com você?",
  },
  {
    sendAt: new Date("2024-10-24T08:03:30"),
    sendByMe: true,
    status: "read",
    content: "Tudo certo, também. Como está o trabalho?",
  },
  {
    sendAt: new Date("2024-10-24T08:05:00"),
    sendByMe: false,
    status: "read",
    content: "Bem puxado hoje, várias reuniões. E por aí?",
  },
  {
    sendAt: new Date("2024-10-24T08:07:45"),
    sendByMe: true,
    status: "read",
    content: "Por aqui tranquilo, começando a organizar as coisas do dia.",
  },
  {
    sendAt: new Date("2024-10-24T08:09:00"),
    sendByMe: false,
    status: "read",
    content: "Boa! Mais tarde vamos almoçar juntos?",
  },
  {
    sendAt: new Date("2024-10-24T08:10:30"),
    sendByMe: true,
    status: "read",
    content: "Claro! Que tal às 12h?",
  },
  {
    sendAt: new Date("2024-10-24T08:11:45"),
    sendByMe: false,
    status: "read",
    content: "Fechado! Vamos no restaurante de sempre?",
  },
  {
    sendAt: new Date("2024-10-24T11:45:00"),
    sendByMe: true,
    status: "read",
    content: "Já estou saindo do escritório. Encontro você lá.",
  },
  {
    sendAt: new Date("2024-10-24T11:47:15"),
    sendByMe: false,
    status: "read",
    content: "Perfeito, estou chegando também.",
  },
  {
    sendAt: new Date("2024-10-24T13:30:00"),
    sendByMe: true,
    status: "read",
    content: "Almoço ótimo! Da próxima vez, a sobremesa é por minha conta!",
  },
  {
    sendAt: new Date("2024-10-24T13:32:30"),
    sendByMe: false,
    status: "read",
    content: "Combinado, foi bom mesmo! Agora bora voltar ao trabalho.",
  },
  {
    sendAt: new Date("2024-10-24T16:00:00"),
    sendByMe: true,
    status: "read",
    content: "Terminei mais cedo aqui, vou para casa. Você ainda no trabalho?",
  },
  {
    sendAt: new Date("2024-10-24T16:10:00"),
    sendByMe: false,
    status: "read",
    content: "Ainda sim, tenho uma última reunião, mas logo acabo.",
  },
  {
    sendAt: new Date("2024-10-24T18:00:00"),
    sendByMe: true,
    status: "read",
    content: "Beleza, boa sorte aí. Qualquer coisa me chama.",
  },
  {
    sendAt: new Date("2024-10-24T18:30:00"),
    sendByMe: false,
    status: "read",
    content: "Valeu! Até mais tarde.",
  },
  // Início das mensagens mais recentes com status "sent" e "delivered"
  {
    sendAt: new Date("2024-10-24T21:00:00"),
    sendByMe: true,
    status: "delivered",
    content: "Está tudo bem por aí? Como foi o final do dia?",
  },
  {
    sendAt: new Date("2024-10-24T21:05:00"),
    sendByMe: true,
    status: "sent",
    content: "Me avisa se precisar de algo, estou por aqui.",
  },
]
