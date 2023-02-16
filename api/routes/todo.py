from flask import Blueprint, jsonify, request
from database.models import Todo
from flask_cors import cross_origin

apiTodo = Blueprint('todo', __name__, url_prefix='/api')

origins = ['https://flask-react-todoapp.vercel.app/']


@apiTodo.route('/', methods=['GET'])
@cross_origin(origins=origins)
def todo():
    data = Todo.getTodos()
    todos = []
    for todo in data:
        todos.append({
            'id': todo.id,
            'title': todo.title,
            'isDone': todo.isDone,
            'created_At': todo.created_At,
        })

    return jsonify(
        {
            'response': 'OK!',
            'message': 'Hello Todo',
            'todos': todos,
        }
    )


@apiTodo.route('/', methods=['POST'])
@cross_origin(origins=origins)
def todoPost():
    title = request.json['title']
    data = Todo.addTodo(title)
    return jsonify(
        {
            'response': 'OK!',
            'message': 'Todo added',
            'data': data,
        }
    )


@apiTodo.route('/<int:id>', methods=['PUT'])
@cross_origin(origins=origins)
def todoPut(id):
    isDone = request.json['isDone']
    data = Todo.updateTodo(id, isDone)
    return jsonify(
        {
            'response': 'OK!',
            'message': 'Todo Updated',
            'data': data,
        }
    )


@apiTodo.route('/<int:id>', methods=['DELETE'])
@cross_origin(origins=origins)
def todoDelete(id):
    data = Todo.deleteTodo(id)
    return jsonify(
        {
            'response': 'OK!',
            'message': 'Todo Deleted',
            'data': data,
        }
    )
