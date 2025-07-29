#!/usr/bin/env python3
"""Task 8's module."""

from typing import Callable

FloatCallable = Callable[[float], float]


def make_multiplier(multiplier: float) -> FloatCallable:
    """Returns a function that multiplies a float by multiplier."""
    def multiplier_function(x: float) -> float:
        return x * multiplier
    return multiplier_function
