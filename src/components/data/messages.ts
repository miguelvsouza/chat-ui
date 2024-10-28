import { IMessageProps } from "../message"

export const messages: IMessageProps[] = [
  {
    sendAt: new Date("2024-10-24T09:00:00"),
    sentByMe: false,
    status: "read",
    content:
      "Bom dia! Estou precisando de ajuda para trocar o cartão de crédito que uso para pagar minha mensalidade.",
  },
  {
    sendAt: new Date("2024-10-24T09:02:30"),
    sentByMe: true,
    status: "read",
    content:
      "Bom dia! Claro, posso te ajudar com isso. Você gostaria de atualizar o cartão de crédito cadastrado no sistema?",
  },
  {
    sendAt: new Date("2024-10-24T09:03:45"),
    sentByMe: false,
    status: "read",
    content: "Isso mesmo, gostaria de alterar o cartão atual.",
  },
  {
    sendAt: new Date("2024-10-24T09:05:00"),
    sentByMe: true,
    status: "read",
    content:
      "Entendido! Para prosseguir, vou te enviar um link seguro onde você pode fazer a alteração. Tudo bem?",
  },
  {
    sendAt: new Date("2024-10-24T09:06:15"),
    sentByMe: false,
    status: "read",
    content: "Perfeito, pode enviar.",
  },
  {
    sendAt: new Date("2024-10-24T09:07:30"),
    sentByMe: true,
    status: "read",
    content:
      "Aqui está o link: [link seguro]. Você pode acessar e seguir as instruções para atualizar seu cartão de crédito.",
  },
  {
    sendAt: new Date("2024-10-24T09:09:00"),
    sentByMe: false,
    status: "read",
    content: "Recebi o link, vou fazer a troca agora. Obrigado!",
  },
  {
    sendAt: new Date("2024-10-24T09:10:30"),
    sentByMe: true,
    status: "read",
    content: "De nada! Se precisar de mais alguma coisa, estou à disposição.",
  },
  {
    sendAt: new Date("2024-10-24T09:12:00"),
    sentByMe: false,
    status: "read",
    content:
      "Tudo certo, cartão atualizado com sucesso! Muito obrigado pela ajuda.",
  },
  {
    sendAt: new Date("2024-10-24T09:13:30"),
    sentByMe: true,
    status: "read",
    content:
      "Ótimo! Fico feliz que deu tudo certo. Se tiver qualquer dúvida no futuro, pode nos procurar.",
  },
  {
    sendAt: new Date("2024-10-24T09:15:00"),
    sentByMe: false,
    status: "read",
    content: "Pode deixar, obrigado novamente! Até mais.",
  },
  {
    sendAt: new Date("2024-10-24T09:16:30"),
    sentByMe: true,
    status: "sent",
    content: "Até mais, tenha um ótimo dia!",
  },
]
