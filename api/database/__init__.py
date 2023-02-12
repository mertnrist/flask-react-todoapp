from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def createApp():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///veritabani.db'
    db.init_app(app)
    return app


def createDB():
    from database.models import db as database

    with createApp().app_context():
        database.create_all()
