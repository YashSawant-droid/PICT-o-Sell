"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

type Message = {
  id: number
  sender: string
  content: string
  timestamp: Date
}

type Chat = {
  id: number
  name: string
  lastMessage: string
  unreadCount: number
}

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null)
  const [message, setMessage] = useState("")
  const [chats, setChats] = useState<Chat[]>([
    { id: 1, name: "John Doe", lastMessage: "Hey, is this still available?", unreadCount: 2 },
    { id: 2, name: "Jane Smith", lastMessage: "Great, I'll take it!", unreadCount: 0 },
  ])
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "John Doe", content: "Hey, is this still available?", timestamp: new Date() },
    { id: 2, sender: "You", content: "Yes, it is!", timestamp: new Date() },
  ])

  const handleSendMessage = () => {
    if (message.trim() === "") return

    const newMessage: Message = {
      id: messages.length + 1,
      sender: "You",
      content: message,
      timestamp: new Date(),
    }

    setMessages([...messages, newMessage])
    setMessage("")
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Chats</h2>
          <ScrollArea className="h-[calc(100vh-250px)]">
            {chats.map((chat) => (
              <Button
                key={chat.id}
                variant="ghost"
                className={`w-full justify-start mb-2 ${selectedChat === chat.id ? "bg-secondary" : ""}`}
                onClick={() => setSelectedChat(chat.id)}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">{chat.name}</div>
                    <div className="text-sm text-gray-500">{chat.lastMessage}</div>
                  </div>
                  {chat.unreadCount > 0 && (
                    <div className="ml-auto bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {chat.unreadCount}
                    </div>
                  )}
                </div>
              </Button>
            ))}
          </ScrollArea>
        </Card>
        <Card className="p-4 md:col-span-2">
          {selectedChat ? (
            <>
              <h2 className="text-xl font-semibold mb-4">{chats.find((chat) => chat.id === selectedChat)?.name}</h2>
              <ScrollArea className="h-[calc(100vh-350px)] mb-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`mb-4 ${msg.sender === "You" ? "text-right" : "text-left"}`}>
                    <div
                      className={`inline-block p-3 rounded-lg ${
                        msg.sender === "You" ? "bg-primary text-white" : "bg-gray-100"
                      }`}
                    >
                      {msg.content}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{msg.timestamp.toLocaleTimeString()}</div>
                  </div>
                ))}
              </ScrollArea>
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button onClick={handleSendMessage}>Send</Button>
              </div>
            </>
          ) : (
            <div className="h-[calc(100vh-250px)] flex items-center justify-center text-gray-500">
              Select a chat to start messaging
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}

