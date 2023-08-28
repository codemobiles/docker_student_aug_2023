$ docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' d3e4cf0dfef4
$ docker run -it --rm busybox
$ docker run -it --rm busybox ping 172.17.0.2