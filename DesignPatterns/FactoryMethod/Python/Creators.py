""" Creator class """

from __future__ import annotations
from abc import ABC, abstractmethod
from Products import Admin, Product, Student


class Creator(ABC):

    @abstractmethod
    def factory_method(self) -> Product:
        pass

    def some_operation(self) -> str:
        result = "This is some operations"
        return result


class StudentCreator(Creator):

    def factory_method(self, name: str, enrollment: str,
                       career: str, grade: int, group: str) -> Product:
        return Student(name, enrollment, career, grade, group)


class AdminCreator(Creator):

    def factory_method(self, name: str, enrollment: str,
                       area: str, job: str) -> Product:
        return Admin(name, enrollment, area, job)
