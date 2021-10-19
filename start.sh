#!/bin/sh

# 启动脚本 运行 Docker

echo "Git Pull"

git pull &&

echo "start docker"

docker build -t express-template . &&

container=$(docker container ls -aqf "name=express-template")

if [ -n "$container" ]; then
    echo "stop container and rm container"
    docker container stop $container &&
    docker container rm $container &&

    echo "start container"
    docker run --name express-template -d -p 3000:3000 express-template
else
    echo "start container"
    docker run --name express-template -d -p 3000:3000 express-template  
fi
