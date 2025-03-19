# Kanban Board App

A **Kanban Board** application built with **Node.js, Express, Sequelize, PostgreSQL, and React**. This app allows users to manage tasks efficiently using a **drag-and-drop** interface with authentication and real-time updates.

---

## 🚀 Features

- 🔐 **User Authentication** (JWT-based)
- 🏗️ **Task Management** (CRUD operations)
- 📦 **Sequelize ORM** for PostgreSQL
- 🖥 **React Frontend**
- 🌐 **GraphQL API with Node.js & Express**
- 📆 **Drag & Drop Task Organization**
- 🛡 **Protected Routes**
- 🚀 **Docker Support** for easy deployment

---

## 📁 Folder Structure

```
Kanban/
│── Develop/
│   ├── client/            # React Frontend
│   ├── server/            # Express Backend
│   │   ├── config/        # Database & environment configurations
│   │   ├── controllers/   # API controllers
│   │   ├── middleware/    # Authentication middleware
│   │   ├── models/        # Sequelize models
│   │   ├── routes/        # API routes
│   │   ├── graphql/       # GraphQL resolvers & schemas
│   │   ├── index.ts       # Express app entry point
│── .env                   # Environment variables
│── README.md              # Project documentation
│── package.json           # Dependencies & scripts
│── docker-compose.yml     # Docker configuration
```

---

## 🛠️ Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/kanban-app.git
cd kanban-app
```

### **2️⃣ Install Dependencies**
```sh
# Backend
cd Develop/server
npm install

# Frontend
cd ../client
npm install
```

### **3️⃣ Configure Environment Variables**
Create a **`.env`** file in the `server/` folder and add:

```
DB_NAME=kanban_db
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=your_secret_key
```

### **4️⃣ Set Up the Database**
Ensure PostgreSQL is running, then create the database:

```sh
# If not already created
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

### **5️⃣ Start the Server**
```sh
cd Develop/server
npm run dev  # Starts backend with Nodemon
```

### **6️⃣ Start the Frontend**
```sh
cd Develop/client
npm start
```

The app should be available at **`http://localhost:3000`** 🚀.

---

## 📜 API Endpoints

### **Authentication**
| Method | Endpoint       | Description              |
|--------|--------------|--------------------------|
| POST   | `/auth/login` | User login & JWT token  |
| POST   | `/auth/signup` | Register a new user    |

### **Tasks API**
| Method | Endpoint        | Description               |
|--------|----------------|---------------------------|
| GET    | `/api/tasks`   | Fetch all tasks          |
| POST   | `/api/tasks`   | Create a new task        |
| PUT    | `/api/tasks/:id` | Update a task           |
| DELETE | `/api/tasks/:id` | Delete a task           |

---


## 🤝 Contributing
Pull requests are welcome! Open an issue for discussions or suggestions.

1. **Fork** the repo
2. **Clone** your forked copy
3. Create a **new branch** (`git checkout -b feature-branch`)
4. Commit your changes (`git commit -m "Added a new feature"`)
5. **Push** to your forked repo (`git push origin feature-branch`)
6. Open a **Pull Request** 🚀

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🎉 Acknowledgments
Special thanks to the open-source community and contributors!

🚀 **Happy Coding!**

