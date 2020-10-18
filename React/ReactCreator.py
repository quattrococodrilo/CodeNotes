#!/usr/bin/python3

import os
import subprocess
from urllib import request


def reaction():
    PROJECT = input("Project name: ")

    SRC = os.path.join(PROJECT, "src")
    COMPONENTS = os.path.join(SRC, "components")
    INDEX_JS = os.path.join(SRC, "index.js")

    PUBLIC = os.path.join(PROJECT, "public")
    INDEX_HTML = os.path.join(PUBLIC, "index.html")

    # Root project
    not os.path.isdir(PROJECT) and os.makedirs(PROJECT)
    # os.chdir(PROJECT)

    not os.path.isdir(SRC) and os.makedirs(SRC)
    not os.path.isdir(COMPONENTS) and os.makedirs(COMPONENTS)
    get_data_and_write(
        INDEX_JS,
        "https://raw.githubusercontent.com/quattrococodrilo/CodeNotes/main/React/Template/src/index.js"
    )

    not os.path.isdir(PUBLIC) and os.makedirs(PUBLIC)
    get_data_and_write(
        INDEX_HTML,
        "https://raw.githubusercontent.com/quattrococodrilo/CodeNotes/main/React/Template/public/index.html"
    )

    NPM_EXIST = subprocess.run(
        ["which", "npm"],
        capture_output=True
    ).stdout.decode(encoding="UTF-8")

    if NPM_EXIST:
        os.chdir(PROJECT)
        os.system("npm init -y")
        os.system("npm install react react-dom")

        with open(".gitignore", "w") as f:
            f.write("node_modules/\nnode_modules/*")
        get_data_and_write(
            "webpack.config.js"
        )


def get_data_and_write(file_path, url):
    """ Get data from url and writhe it in a file. """
    with open(file_path, "w") as f:
        req = request.Request(url)
        with request.urlopen(req) as response:
            f.write(response.read().decode(encoding="UTF-8"))


if __name__ == "__main__":
    reaction()
