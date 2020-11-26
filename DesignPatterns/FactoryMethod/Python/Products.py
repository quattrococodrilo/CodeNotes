""" Products classes. """

from __future__ import annotations
from abc import ABC, abstractmethod


class Product(ABC):
    def __init__(self, name: str, enrollment: str):
        self.name = name
        self.enrollment = enrollment

    @abstractmethod
    def operation(self) -> str:
        pass


class Student(Product):
    def __init__(self, name: str, enrollment: str,
                 career: str, grade: int, group: str):
        super().__init__(name, enrollment)
        self.career = career
        self.grade = grade
        self.group = group

    def operation(self) -> str:
        return "Study"

    def __str__(self):
        return f"Student: {self.name} - {self.enrollment}"


class Admin(Product):
    def __init__(self, name: str, enrollment: str, area: str, job: str):
        super().__init__(name, enrollment)
        self.area = area
        self.job = job

    def operation(self) -> str:
        return "Work"

    def __str__(self):
        return f"Admin: {self.name} - {self.enrollment}"
