from flask import Flask, render_template, request, redirect, url_for
from models import db, Card

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///cards.db'
db.init_app(app)

@app.route('/')
def index():
    cards = Card.query.all()
    return render_template('index.html', cards=cards)

@app.route('/card', methods=['GET', 'POST'])
def card():
    if request.method == 'POST':
        message = request.form['message']
        new_card = Card(message=message)
        db.session.add(new_card)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('card.html')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
