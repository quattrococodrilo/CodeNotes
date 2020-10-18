#!/usr/bin/python3

import os
import subprocess


def reaction():
    PROJECT = input("Project name: ")
    COMPONENTS = os.path.join(PROJECT, "components")

    # Root project
    if not os.path.isdir(PROJECT):
        os.makedirs(PROJECT)
    os.chdir(PROJECT)

    # Main directories
    if not os.path.isdir(COMPONENTS):
        os.makedirs(COMPONENTS)
    if not os.path.isfile()

    NPM_EXIST = subprocess.run(
        ["which", "np"],
        capture_output=True
    ).stdout.decode(encoding="UTF-8")

    if NPM_EXIST:
        os.system("npm init -y")
        os.system("npm install react react-dom")


if __name__ == "__main__":
    reaction()
