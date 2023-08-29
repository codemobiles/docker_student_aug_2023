docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container ID>
docker run --rm -e MONGO_URL=mongodb://172.23.0.2:27017/react-app  -p 3000:8080 demo7-backend