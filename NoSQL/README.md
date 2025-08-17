# NoSQL Project: MongoDB and Python

This project is an introduction to NoSQL databases, using MongoDB as the primary example. It includes a series of scripts that demonstrate how to perform basic database operations. The tasks are completed using both the native `mongo` shell and Python with the `PyMongo` library.

The goal is to understand the fundamental concepts of document-based databases, from creating and managing data to querying and analyzing it with a programming language.

## Tasks & Concepts

Here is a breakdown of the scripts created in this project, explained simply. Think of our database as a big filing cabinet.

### Mongo Shell Scripts

*   `0-list_databases`: Shows all the "drawers" (databases) in our filing cabinet.
*   `1-use_or_create_database`: Selects a specific "drawer" (database) to work with.
*   `2-insert`: Puts a new "piece of paper" (a document) into a "folder" (a collection).
*   `3-all`: Shows every single document inside a collection.
*   `4-match`: Finds specific documents that match a search query.
*   `5-count`: Counts the total number of documents in a collection.
*   `6-update`: Edits a document that is already in a collection.
*   `7-delete`: Removes a document from a collection.

### Python Scripts (using PyMongo)

*   `8-all.py`: A Python function to list all documents in a collection.
*   `9-insert_school.py`: A Python function that inserts a new document into a collection.
*   `10-update_topics.py`: A Python function that updates all documents matching a specific name.
*   `11-schools_by_topic.py`: A Python function that finds all schools that teach a specific topic.
*   `12-log_stats.py`: A Python script that connects to a logs database and provides statistics about Nginx web server logs.