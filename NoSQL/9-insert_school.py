#!/usr/bin/env python3
""" 9-insert_school module """


def insert_school(mongo_collection, **kwargs):
    """ inserts a new document in a collection based on kwargs
    
    Args:
        mongo_collection: the pymongo collection object
        kwargs: keyword arguments for the document
        
    Returns:
        the new _id
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
