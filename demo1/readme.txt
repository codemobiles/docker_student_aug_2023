$ docker run node
$ docker run --name nodeapp node
$ docker run --name nodeapp node node --version
$ docker rm nodeapp
$ docker run --rm  --name nodeapp node node --version
$ docker run --rm  --name nodeapp -v ./:/app node node /app/index.js   // case of unix
$ docker run --rm  --name nodeapp -v $(pwd):/app node node /app/index.js // case of unix
$ docker run --rm  --name nodeapp -v %cd%:/app node node /app/index.js // case of window
$ docker run -d --rm  --name nodeapp -v %cd%:/app node node /app/index.js // case of window
$ docker logs nodeapp
$ docker logs --follow nodeapp
$ docker exec -it nodeapp sh
$ docker stop/start nodeapp

