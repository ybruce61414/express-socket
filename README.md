# Express Socket Server

This is a quick demo for [Socket.IO]('https://socket.io/') server.

### Quick start  
Activate server:
1. build image
2. run container
   - `--publish (-p)` command is [host port]:[container port]
   - `-d` running in detached mode
 ```zsh 
 docker build --tag express-socket .          # ----(1)
 docker run -d -p 8000:8000 express-socket    # ----(2)
 ```

Terminate Sever:
```zsh
  docker ps -a                   # show all running containers
  docker stop [CONTAINER_NAME]   # stop container
```

### Memo
This is the __memo__ for creating express project without using toolchain from scratch.
#### steps
1. create empty folder
2. `yarn add typescript --dev`
3. `yarn add express dotenv`
4. `yarn add @types/express @types/node`
5. `yarn add -D concurrently nodemon`
6. `npx tsc --int`

add to package.json

```js
{
  "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
  }
}
```