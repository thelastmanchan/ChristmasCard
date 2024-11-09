from app import app, db

def init_database():
    with app.app_context():
        db.create_all()
        print("데이터베이스가 성공적으로 생성되었습니다!")

if __name__ == "__main__":
    init_database()