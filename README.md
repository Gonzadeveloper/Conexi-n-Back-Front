# 📋 Lista de Nombres Full Stack

Una aplicación web básica que permite **visualizar y agregar nombres** a una lista. Utiliza una arquitectura **full stack** con conexión a base de datos PostgreSQL, ideal para entender la comunicación entre frontend, backend y base de datos.

---

## 🚀 Tecnologías utilizadas

- 🖼️ **Frontend:** React + Vite  
- 🧠 **Backend:** Node.js + Express  
- 🗃️ **Base de datos:** PostgreSQL  
- 🔗 **ORM:** Sequelize  
- 🌐 **Deploy:** *(opcional)* Render / Railway

---

## 🛠️ Instalación y ejecución local

### 📦 Backend

bash
cd BackBasico
npm install


## 1. Crea un archivo .env en la raíz del backend con esta variable:

env

- DATABASE_URL=postgres://usuario:contraseña@host:puerto/nombre_db

## 2. Iniciar el servidor:

bash

- npm run dev
- Por defecto, corre en http://localhost:3001

### 🌐 Frontend
- bash

- cd Front
- npm install
- npm run dev
- Corre en http://localhost:5173 (o el que indique Vite).

### ⚙️ Funcionalidades
- ✅ Obtener todos los nombres desde PostgreSQL

- ✅ Agregar nuevos nombres desde el frontend

- ✅ Comunicación vía API REST

- ✅ Uso de useEffect y useState en React

- ✅ Arquitectura limpia y organizada

### 📁 Estructura del backend
bash

BackBasico/
├── models/
│   └── Name.js            # Modelo Sequelize
├── routes/
│   └── names.js           # Endpoints REST
├── database.js            # Configuración Sequelize
├── index.js               # Entrada principal del servidor
└── .env                   # Variables de entorno
📸 Vista previa (opcional)
<!-- Agrega una captura o GIF si lo deseas -->

### 🧠 Aprendizajes
- ✔️ Conexión full stack completa (React + Node + DB)
- ✔️ Buenas prácticas con Express y Sequelize
- ✔️ Comunicación asincrónica entre frontend y backend
- ✔️ Lectura de variables .env para proteger credenciales