# 🛒 React Cart App using Context + useReducer

This project is a simple shopping cart application built using **React**, where we manage cart state globally using **React Context API** and **`useReducer`**.

---

## 📌 Why This Approach?

Managing shared state like a cart using just `useState` becomes messy as your app grows.

Using:
- `Context` → to share data across components
- `useReducer` → to handle complex logic (add, remove, update, clear)

...gives us a **clean, scalable, and Redux-like state management solution**.

---

## 🚀 Features

- Add items to cart
- Remove items from cart
- Track quantity of each product
- Global cart state across pages
- Structured logic using reducer

---

## 🧠 Core Concepts

### 1. **React Context**
- Allows us to **share state globally** across components
- Avoids prop drilling

### 2. **useReducer Hook**
- Manages **state transitions** based on dispatched `actions`
- Centralizes update logic in a single `reducer` function

### 3. **Context + Reducer Together**
- Builds a mini Redux-style architecture
- Easy to scale, test, and debug

---

