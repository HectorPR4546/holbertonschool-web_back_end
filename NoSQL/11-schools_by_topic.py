#!/usr/bin/env python3
""" 11-schools_by_topic module """


def schools_by_topic(mongo_collection, topic):
    """ returns the list of school having a specific topic
    
    Args:
        mongo_collection: the pymongo collection object
        topic (string): the topic searched
        
    Returns:
        a list of schools having a specific topic
    """
    return mongo_collection.find({"topics": topic})
