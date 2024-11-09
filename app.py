import os
from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///christmas_cards.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = 'static/uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

db = SQLAlchemy(app)

class ChristmasCard(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    author = db.Column(db.String(100), nullable=False)
    message = db.Column(db.Text, nullable=False)
    image_path = db.Column(db.String(200))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
def index():
    cards = ChristmasCard.query.order_by(ChristmasCard.created_at.desc()).all()
    return render_template('index.html', cards=cards)

@app.route('/write', methods=['GET', 'POST'])
def write():
    if request.method == 'POST':
        author = request.form['author']
        message = request.form['message']
        image = request.files['image']
        
        image_path = None
        if image and allowed_file(image.filename):
            filename = secure_filename(image.filename)
            image_path = os.path.join('uploads', filename)
            image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        
        new_card = ChristmasCard(author=author, message=message, image_path=image_path)
        db.session.add(new_card)
        db.session.commit()
        return redirect(url_for('index'))
    
    return render_template('write.html')

if __name__ == '__main__':
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
    app.run(debug=True)