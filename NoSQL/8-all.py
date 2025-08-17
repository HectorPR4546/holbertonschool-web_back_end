#!/usr/bin/env python3
""" 8-all module """


def list_all(mongo_collection):
    """ lists all documents in a collection
    
    Args:
        mongo_collection: the pymongo collection object
        
    Returns:
        a list of all documents in a collection
    """
    return list(mongo_collection.find())
