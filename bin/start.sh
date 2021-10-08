#!/bin/bash

NAME='node-temapte'
MainClass='server'

#build
npm run build

#run
echo "start node"
pm2 start $Pwd/dist/build/$MainClass.js # -n $Name