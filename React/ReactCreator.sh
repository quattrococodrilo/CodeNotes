#!/bin/bash

echo "Enter project name: "
read project

if [[ ! -d "$project" ]]
then
    mkdir $project
fi

cd $project

npm init -y
npm install react react-dom


