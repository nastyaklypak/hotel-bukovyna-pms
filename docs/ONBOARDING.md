# Technical Onboarding — Hotel Bukovyna PMS

## 1. Мета
Допомогти новому учаснику команди за 10–15 хвилин розгорнути проєкт локально.

## 2. Необхідне ПЗ
| Інструмент | Призначення | Перевірка |
|---|---|---|
| Git | контроль версій | `git --version` |
| Visual Studio Code | редактор коду | `code --version` |
| Браузер | запуск демо | — |

## 3. Розгортання
1. `git clone https://github.com/YOUR-ACCOUNT/hotel-bukovyna-pms.git`
2. `cd hotel-bukovyna-pms`
3. `code .`
4. Відкрити `index.html` у браузері (`open index.html` на macOS).

Очікуваний результат: сторінка з статистикою, таблицями «Номери» та «Бронювання».

## 4. Типові проблеми
| Проблема | Рішення |
|---|---|
| `git: command not found` | Встановити Git (macOS: `xcode-select --install`) |
| Сторінка порожня | Перевірити, що `script.js` лежить поруч з `index.html` |
| Помилка авторизації при push | Використати Personal Access Token замість пароля |
