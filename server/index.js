import express from 'express'
import cors from 'cors'
import { createServer } from 'node:http'
import { Server } from 'socket.io'

const PORT = Number(process.env.CHAT_SERVER_PORT || 3001)
const HOST = process.env.CHAT_SERVER_HOST || '127.0.0.1'
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173'
const CHAT_ADMIN_PASSWORD = process.env.CHAT_ADMIN_PASSWORD || 'admin123'

const app = express()
app.use(cors({ origin: CLIENT_ORIGIN }))
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ ok: true })
})

const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: CLIENT_ORIGIN,
    methods: ['GET', 'POST'],
  },
})

const roomMessages = new Map()

io.on('connection', (socket) => {
  socket.data.isAdminAuthenticated = false

  socket.on('authenticate_admin', ({ password = '' } = {}) => {
    const success = Boolean(password) && password === CHAT_ADMIN_PASSWORD
    socket.data.isAdminAuthenticated = success
    socket.emit('admin_auth_result', { success })
  })

  socket.on('join_room', ({ room = 'support-main', role = 'customer', name = 'Guest' } = {}) => {
    socket.join(room)
    socket.data.room = room
    const wantsAdmin = role === 'admin'
    const canBeAdmin = wantsAdmin && socket.data.isAdminAuthenticated
    socket.data.role = canBeAdmin ? 'admin' : 'customer'
    socket.data.name = name

    if (wantsAdmin && !canBeAdmin) {
      socket.emit('admin_auth_required')
    }

    const history = roomMessages.get(room) || []
    socket.emit('chat_history', history)
  })

  socket.on('send_message', ({ text = '' } = {}) => {
    const room = socket.data.room
    if (!room || !text.trim()) return

    const message = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      text: text.trim(),
      role: socket.data.role || 'customer',
      name: socket.data.name || 'Guest',
      timestamp: Date.now(),
    }

    const history = roomMessages.get(room) || []
    history.push(message)
    if (history.length > 200) history.shift()
    roomMessages.set(room, history)

    io.to(room).emit('new_message', message)
  })
})

httpServer.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`Realtime chat server listening on http://${HOST}:${PORT}`)
})
