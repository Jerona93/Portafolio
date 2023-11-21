import os #para las variables de entorno y apis

from flask import Flask
from flask_frozen import Freezer



def create_app():
    app = Flask(__name__)

    freezer = Freezer(app)
    if __name__ == '__main__':
        freezer.freeze()

    app.config.from_mapping(
        # FROM_EMAIL=os.environ.get('FROM_EMAIL'),
        # MAILJET_API_KEY=os.environ.get('MAILJET_API_KEY'),
        # MAILJET_API_SECRET=os.environ.get('MAILJET_API_SECRET'),
        # DATABASE_HOST=os.environ.get('FLASK_DATABASE_HOST'),
        # DATABASE_PASSWORD=os.environ.get('FLASK_DATABASE_PASSWORD'),
        # DATABASE_USER=os.environ.get('FLASK_DATABASE_USER'),
        # DATABASE=os.environ.get('FLASK_DATABASE'),
        SENDGRID_KEY = os.environ.get('SENDGRID_KEY')
    )

    # from . import db

    # db.init_app(app)
    
    from . import portfolio

    app.register_blueprint(portfolio.bp)

    return app