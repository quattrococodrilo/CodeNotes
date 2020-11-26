from __future__ import annotations
from abc import ABC, abstractmethod

class AbstractFactory(ABC):

    @abstractmethod
    def connection(self) -> AbstractProduct:
        pass

    @ abstractmethod
    def publish(self) -> AbstractProduct:
        pass
