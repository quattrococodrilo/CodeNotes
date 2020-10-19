#!/usr/bin/python3

import argparse
import os
import subprocess
from urllib import request


class Reactor:
    def __init__(self,
                 path_directory,
                 verbose=False,
                 no_create_files=False,
                 no_install_npm=False):

        self._verbose = verbose
        self._no_install_npm = no_install_npm
        self._no_create_files = no_create_files
        self._project = path_directory
        self._src = os.path.join(self._project, "src")
        self._components = os.path.join(self._src, "components")
        self._public = os.path.join(self._project, "public")
        if self._project:
            self.reaction()
        else:
            print("Enter a path and name project (my/project/path/name).")

    def files(self):
        """ Return a list of files to be created.
        Each item must be: {'path': 'path/to/file', 'url': 'url/to/download/file'}  """

        return [
            {
                "path": os.path.join(self._src, "index.js"),
                "url":  "https://raw.githubusercontent.com/quattrococodrilo/CodeNotes/main/React/Template/src/index.js"
            },
            {
                "path": os.path.join(self._public, "index.html"),
                "url": "https://raw.githubusercontent.com/quattrococodrilo/CodeNotes/main/React/Template/public/index.html"
            },
            {
                "path": os.path.join(self._project, ".babelrc"),
                "url": "https://github.com/quattrococodrilo/CodeNotes/blob/main/React/Template/.babelrc"
            }
        ]

    def npm_modules(self):
        """ NPM Modules to be installed. """
        return [
            "npm install react react-dom",
            "npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev",
        ]

    def reaction(self):
        """ Creates a structure project, files and install NPM packages. """
        files_to_create = self.files()
        not os.path.isdir(self._public) and os.makedirs(self._public)
        not os.path.isdir(self._project) and os.makedirs(self._project)
        not os.path.isdir(self._src) and os.makedirs(self._src)
        not os.path.isdir(self._components) and os.makedirs(self._components)

        if not self._no_create_files:
            for f in files_to_create:
                self.get_data_and_write(f["path"], f["url"])
                if self._verbose:
                    print(f["path"])
                    print("------------------------------")

        if not self._no_install_npm:
            NPM_EXIST = subprocess.run(
                ["which", "npm"],
                capture_output=True
            ).stdout.decode(encoding="UTF-8")

            if NPM_EXIST:
                print("\n---------- NPM MODULES ----------")
                modules = self.npm_modules()
                os.chdir(self._project)
                os.system("npm init -y")
                for module in modules:
                    os.system(module)
            else:
                print("NPM not found.")

    def get_data_and_write(self, file_path, url):
        """Downloads a file from url, and save it
        on a directory.

        Args:
            - file_path (string): place and name to save the file.
            - url (string): URL to download the file.
        """

        with open(file_path, "w") as f:
            req = request.Request(url)
            with request.urlopen(req) as response:
                f.write(response.read().decode(encoding="UTF-8"))


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Creates a React project."
    )
    parser.add_argument("-p", "--path", required=True,
                        help="path/to/directory")
    parser.add_argument("-nm", "--no_install_modules", action="store_true",
                        help="no install modules")
    parser.add_argument("-nf", "--no_create_files", action="store_true",
                        help="no create files")
    parser.add_argument("-v", "--verbose", action="store_true",
                        help="show output files creation")
    args = parser.parse_args()
    Reactor(
        path_directory=args.path,
        verbose=args.verbose,
        no_create_files=args.no_create_files,
        no_install_npm=args.no_install_modules
    )
