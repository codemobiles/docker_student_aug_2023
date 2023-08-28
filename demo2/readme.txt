$ docker build -t demo2:1.0 .
$ docker run --rm --name demo2 demo2:1.0
$ docker run --rm --name demo2 -p 4000:3000 demo2:1.0
// http://localhost:4000/register?username=lek&password=6666