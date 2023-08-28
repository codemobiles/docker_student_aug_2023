- https://hub.docker.com/_/mariadb
$ docker run --detach --name some-mariadb --env MARIADB_USER=example-user --env MARIADB_PASSWORD=my_cool_secret --env MARIADB_ROOT_PASSWORD=my-secret-pw  mariadb:latest
$ docker run -p 3306:3306 --detach --name some-mariadb --env MARIADB_USER=example-user --env MARIADB_PASSWORD=my_cool_secret --env MARIADB_ROOT_PASSWORD=my-secret-pw  mariadb:latest


- https://hub.docker.com/_/phpmyadmin
$ docker run --name phpmyadmin -d --link mysql_db_server:db -p 8080:80 phpmyadmin
