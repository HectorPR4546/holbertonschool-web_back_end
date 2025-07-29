#!/usr/bin/env python3
"""Task 8's module."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Takes a float multiplier and returns a function that multiplies a float by multiplier."""
    def multiplier_function(x: float) -> float:
        return x * multiplier
    return multiplier_function
