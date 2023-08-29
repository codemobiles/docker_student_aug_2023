$ docker run --rm -d --name mongo -p 27018:27017 mongo

$ docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container ID>
$ docker run --rm --name backend -d -e MONGO_URL=mongodb://172.17.0.3/react-app  -p 3000:8080 demo7-backend
$ docker run --rm --link mongo:dbserver -e MONGO_URL=mongodb://dbserver/react-app  -p 3000:8080 demo7-backend

