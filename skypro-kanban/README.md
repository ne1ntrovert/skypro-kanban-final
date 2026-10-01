# Skypro Kanban

Канбан-доска на React: авторизация, регистрация, создание, просмотр, редактирование и удаление задач.

## Запуск

```bash
npm install
npm run dev      
npm run build    
```

## Стек

React, React Router, styled-components, react-toastify, Vite.

## Структура

```
src/
  api/          запросы к серверу (http.js — единая обёртка над fetch)
  app/          маршруты и защита страниц
  components/   Header, Main, Column, Card, Loader, Popup (общие стили), popups
  context/      AuthContext, TaskContext
  pages/        страницы: вход, регистрация, 404 и страницы-попапы задач
  theme/        темы, глобальные стили, провайдер темы
  utils/        константы доски, валидация
``` 