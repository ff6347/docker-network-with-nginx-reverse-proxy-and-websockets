# Docker Network With Nginx Reverse Proxy And Websockets

A test setup that runs two Node.js Express servers in a docker network with Nginx as reverse proxy in-front of it. The `api/` has a webocket server running. The `client/` connects to it.


## Setup

```bash
# one session
cd client
npm install
cd ..
cd api
npm install
cd ..
docker-compose up
```

```bash
#other session
open http://localhost:8888
```

Watch the console of the localhost:8888
