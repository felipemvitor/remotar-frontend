import io from 'socket.io-client'

const SOCKET_URL = process.env.SOCKET_URL || 'http://localhost:4500'

export const socket = io(SOCKET_URL, { query: "type=remotar" })