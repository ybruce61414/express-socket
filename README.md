# Express Socket Server

prerequisites

1. `yarn add typescript --dev`
2. `yarn add express dotenv`
3. `yarn add @types/express @types/node`
4. `yarn add -D concurrently nodemon`
5. `npx tsc --int`

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

run in docker
```zsh
  1. docker build --tag express-socket .
  2. docker run -p 8000:8000 express-socket  
```

terminate docker container 
```zsh
  1. docker ps -a
  2. docker stop [CONTAINER_NAME]
```
