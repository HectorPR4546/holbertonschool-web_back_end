#!/usr/bin/env python3
"""Task 7's module."""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Takes a string and an int/float and returns a tuple.
    The tuple contains the string and the square of the int/float as a float.
    """
    return (k, float(v**2))
