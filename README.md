# Real-Time Chat Application

A modern, full-stack real-time chat application built with React, Node.js, Socket.IO, and MongoDB. Features include user authentication, real-time messaging, image sharing, online status indicators, and responsive design.

## ✨ Features

- **Real-time Messaging**: Instant message delivery using Socket.IO
- **User Authentication**: Secure signup/login with JWT tokens
- **Profile Management**: Update profile picture, name, and bio
- **Image Sharing**: Upload and share images in chat
- **Online Status**: See who's online/offline in real-time
- **Unread Messages**: Visual indicators for unread messages
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Search Users**: Find users quickly with search functionality
- **Message Timestamps**: See when messages were sent

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Socket.IO Client** - Real-time communication
- **React Router** - Client-side routing
- **React Hot Toast** - Toast notifications
- **Axios** - HTTP client

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Socket.IO** - Real-time communication
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Cloudinary** - Image storage and optimization
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Real-Time-Chat-Application/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/        # Images and icons
│   │   ├── components/    # React components
│   │   ├── lib/          # Utility functions
│   │   ├── pages/        # Page components
│   │   └── context/      # React context providers
│   ├── package.json
│   └── vite.config.js
├── server/                # Backend Node.js application
│   ├── controllers/       # Route handlers
│   ├── lib/              # Database and utility configs
│   ├── middlewares/      # Custom middleware
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── package.json
│   └── server.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB database
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Real-Time-Chat-Application.git
   cd Real-Time-Chat-Application
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Server Port
PORT=5000

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Running the Application

1. **Start the server** (from the server directory)
   ```bash
   npm run server
   # or for production
   npm start
   ```

2. **Start the client** (from the client directory)
   ```bash
   npm run dev
   ```

3. **Access the application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000`

## 📱 Usage

1. **Sign Up**: Create a new account with your name, email, password, and bio
2. **Login**: Sign in with your credentials
3. **Profile**: Update your profile picture, name, and bio
4. **Chat**: Select a user from the sidebar to start chatting
5. **Send Messages**: Type and send text messages or upload images
6. **Online Status**: See green dots next to online users
7. **Search**: Use the search bar to find specific users

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/check` - Check authentication status
- `PUT /api/auth/update-profile` - Update user profile

### Messages
- `GET /api/messages/:userId` - Get messages with specific user
- `POST /api/messages/send/:userId` - Send message to user

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Socket.IO for real-time communication
- Cloudinary for image storage
- MongoDB for database
- Tailwind CSS for styling
- React ecosystem for frontend development

## 🐛 Known Issues

- None currently reported

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ by Nishant Gupta