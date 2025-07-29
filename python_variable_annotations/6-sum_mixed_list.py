#!/usr/bin/env python3
"""Task 6's module."""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Sums a list of integers and floats."""
    return float(sum(mxd_lst))
