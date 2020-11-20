#!/usr/bin/python3
""" Client """

from __future__ import annotations
from Creators import AdminCreator, Creator, StudentCreator


product_types = {
    'admin': AdminCreator,
    'student': StudentCreator,
}


def client(product_type: str, *args) -> Creator:
    Creator = product_types[product_type]
    return Creator().factory_method(*args)


if __name__ == "__main__":
    c = client("admin", "Fernando Cruz", "66564323", "SIT", "Chief")
    print(c)
    print(c.operation())

    s = client("student", "Jaime Camil", "654764353", "IMA", 6, "B")
    print(s)
    print(s.operation())
