#!/bin/sh
mkdir mysql sites
chmod -R 777 mysql/ sites/
mv install.sh sites/
chmod +x sites/install.sh
docker run --name mysql -v $PWD/mysql:/var/lib/mysql  -e MYSQL_ROOT_PASSWORD=root -d mysql:latest