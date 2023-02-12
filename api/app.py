from flask import Flask
from flask_cors import CORS

from database import createApp, createDB
from routes.todo import apiTodo

app = createApp()
db = createDB()

app.register_blueprint(apiTodo)
if __name__ == '__main__':
    CORS(app)
    app.run(debug=True, host='localhost')
