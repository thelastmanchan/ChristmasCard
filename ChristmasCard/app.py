from flask import Flask, render_template, request, redirect, url_for
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'static/uploads'

# 카드 저장을 위한 리스트 (실제로는 데이터베이스를 사용해야 합니다)
cards = []

@app.route('/')
def index():
    return render_template('index.html', cards=cards)

@app.route('/create_card', methods=['GET', 'POST'])
def create_card():
    if request.method == 'POST':
        message = request.form['message']
        image = request.files['image']
        if image:
            filename = secure_filename(image.filename)
            image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        else:
            filename = None
        cards.append({'message': message, 'image': filename})
        return redirect(url_for('index'))
    
    return render_template('create_card.html')

@app.route('/minigame')
def minigame():
    return render_template('minigame.html')

if __name__ == '__main__':
    app.run(debug=True)
