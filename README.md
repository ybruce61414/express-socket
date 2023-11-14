# Express Socket Server

This is a quick demo for webSocket server using [Socket.IO](https://socket.io/).

### Quick start  
Activate server through Docker:
1. build image
2. run container
 ```zsh 
 $ cd /path/to/express-socket                   # navigate to the repo contains Dockerfile 
 $ docker build --tag express-socket .          # ----(1)
 $ docker run -d -p 8000:8000 express-socket    # ----(2)
 ```
_notes_:
  -  `--publish (-p)` command is __[host port]:[container port]__
  -  `-d` running in detached mode

Terminate Sever:
```zsh
  $ docker ps -a                   # show all running containers
  $ docker stop [CONTAINER_NAMES]     # stop container
  $ docker rm [CONTAINER_NAMES]       # remove container
  ($ docker rm -f [CONTAINER_NAMES])  # stop and remove 
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