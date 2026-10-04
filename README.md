# Hotel Bukovyna PMS Demo

Educational Hotel Management System project for Hotel Bukovyna.

Навчальний прототип PMS (Property Management System): перегляд номерів, їхніх статусів і списку бронювань.

## Features
- Список номерів зі статусами (Вільний / Зайнятий / Прибирання)
- Фільтр номерів за статусом
- Статистика по номерах
- Список бронювань з кількістю ночей

## Technologies
HTML, CSS, JavaScript. Без backend і бази даних.

## Requirements
- Git
- Веб-браузер (Chrome, Safari або Firefox)
- Visual Studio Code (рекомендовано)

## Local setup
```bash
git clone https://github.com/YOUR-ACCOUNT/hotel-bukovyna-pms.git
cd hotel-bukovyna-pms
open index.html        # macOS
# start index.html     # Windows
```
Встановлювати залежності не потрібно.

## Project structure
```text
hotel-bukovyna-pms/
├── index.html          # розмітка сторінки
├── style.css           # стилі
├── script.js           # тестові дані та відображення
├── docs/ONBOARDING.md  # Technical Onboarding
├── .gitignore
└── README.md
```

## Git workflow
Task → Branch → Development → Testing → Commit → Pull Request → Review → Merge

```bash
git checkout -b feature/task-name
git add .
git commit -m "Short description"
git push origin feature/task-name
```

## Roadmap
- Backend на .NET
- База даних PostgreSQL
- Створення та редагування бронювань
