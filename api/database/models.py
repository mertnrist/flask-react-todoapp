from dataclasses import dataclass
from database import db


class Todo(db.Model):
    __tablename__ = 'todo'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(300), nullable=False)
    isDone = db.Column(db.Boolean, nullable=False, default=False)
    created_At = db.Column(db.DateTime, server_default=db.func.now())

    def __init__(self, id, title, isDone):
        self.id = id
        self.title = title
        self.isDone = isDone
        self.created_At = db.func.now()

    @classmethod
    def addTodo(cls, title):
        todo = cls(title=title,
                   id=None, isDone=False)
        db.session.add(todo)
        db.session.commit()

        return {
            'id': todo.id,
            'title': todo.title,
            'isDone': todo.isDone,
            'created_At': todo.created_At,
        }

    @classmethod
    def getTodo(cls, id):
        return cls.query.filter_by(id=id).first()

    @classmethod
    def getTodos(cls):
        return cls.query.all()

    @classmethod
    def deleteTodo(cls, id):
        todo = cls.query.filter_by(id=id).first()
        db.session.delete(todo)
        db.session.commit()

        return {
            'id': todo.id,
            'title': todo.title,
            'isDone': todo.isDone,
            'created_At': todo.created_At,
        }

    @classmethod
    def updateTodo(cls, id, isDone):
        todo = cls.query.filter_by(id=id).first()

        todo.isDone = isDone
        db.session.commit()
        return {
            'id': todo.id,
            'title': todo.title,
            'isDone': todo.isDone,
            'created_At': todo.created_At,
        }
