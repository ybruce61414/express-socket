import express, { Express, Request, Response } from 'express'
import { Server } from 'socket.io'
import dotenv from 'dotenv'

dotenv.config()

const SOCKET_EVENT = {
  messageFromServer: 'message_from_server',
  messageFromClient: 'message_from_client',
  connection: 'connection',
  disconnect: 'disconnect'
}

const port = process.env.PORT
const app: Express = express()


const server = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})

const socketIo = new Server(server, {
  cors: {
    origin: '*',
    // Allow any origin for testing purposes. This should be changed on production.
  },
})

socketIo.on(SOCKET_EVENT.connection, socket => {
  console.log(`New connection created: ${socket.id}`)

  // Get the auth token provided on handshake.
  const token = socket.handshake.auth.token
  console.log('Auth token', token)

  try {
    // Verify the token here and get user info from JWT token.
  } catch (error) {
    socket.disconnect(true)
  }

  // A client is disconnected.
  socket.on(SOCKET_EVENT.disconnect, () => {
    console.log('A user disconnected')
  })

  // Read message recieved from client.
  socket.on(SOCKET_EVENT.messageFromClient, message => {
    console.log('message_from_client: ', message)

    // todo: add processing message to client business logic
    const messageFromAuthorObj = {
      message_id: 'socket_id',
      sent_to_id: 'ellen',
      sent_from_id: 'viola',
      content: `from Socket server: ${message}`,
      timestamp: new Date().toISOString(),
    }
    socket.emit(SOCKET_EVENT.messageFromServer, messageFromAuthorObj)


    setTimeout(() => {
      const messageFromOtherObj = {
        message_id: 'socket_id',
        sent_to_id: 'viola',
        sent_from_id: 'ellen',
        content: `from Ellen: ${message}`,
        timestamp: new Date().toISOString(),
      }
      socket.emit(SOCKET_EVENT.messageFromServer, messageFromOtherObj)
    }, 2_000)
  })

  // Send a message to the connected client 5 seconds after the connection is created.
  // setTimeout(() => {
  //   socket.emit('message_from_server', Math.random())
  // }, 5_000)
})

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server yoyo')
})
