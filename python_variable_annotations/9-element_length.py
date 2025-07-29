#!/usr/bin/env python3
"""Task 9's module."""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Annotates the parameters and return values of a function.
    """
    return [(i, len(i)) for i in lst]
