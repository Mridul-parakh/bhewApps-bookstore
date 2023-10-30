# STEPS TO RUN APPLICATION

1. npm i
2. add credential.env file in your root directory and db url in key "DB_STRING"
3. npm start


# DESCRIPTION OF MODELS

## BOOKS_MODEL

### `book_id`

this is unique_id which will autoincreament whenever new books(docs) added to collection

### `title`

this is unique title, which will be provided by user, which refers book title

### `author`

this is auther name provided by user, which refers the owner of that book

### `summary`

this is a shot description of book provided by user


# API ENDPOINTS INFO


## POST METHOD

### /api/addBooks 
this api help to create new book and also it helps to update books Detail's by providing title

## GET METHOD

### /api/getBooksData
this api helps to fetch specific book details and also help to fetch all books info

## DELETE METHOD

### /api/deleteBook
this api help to delete specific book by providing ID



# DECISIONS/ASSUMPTIONS:

1. Have assume title is unique, more than 1 book shouldn't carries same title logically
2. optimize API's like GET and POST in such a way that it manage two responses


