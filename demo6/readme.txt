$ docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' demo6-json-server-1
$ docker run -it --rm busybox
$ docker run -it --rm busybox ping 172.17.0.2



# docker compose
$ docker compose up -d
$ docker compose down
$ docker compose stop/start/restart
