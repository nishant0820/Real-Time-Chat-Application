# Real-Time Chat Application - Backend

A robust Node.js backend server for a real-time chat application built with Express.js, Socket.IO, and MongoDB. This server provides secure authentication, message handling, user management, and real-time communication capabilities.

## ✨ Features

- **Real-time Communication**: WebSocket connections using Socket.IO
- **User Authentication**: JWT-based secure authentication system
- **Message Management**: Store and retrieve chat messages
- **File Upload**: Image sharing with Cloudinary integration
- **User Management**: Profile updates and user data handling
- **Online Status Tracking**: Real-time user presence detection
- **Database Integration**: MongoDB with Mongoose ODM
- **Security**: Password hashing, CORS protection, and input validation
- **Scalable Architecture**: Modular design with proper separation of concerns

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime environment
- **Express.js 5** - Fast, unopinionated web framework
- **Socket.IO** - Real-time bidirectional event-based communication
- **MongoDB** - NoSQL database for data persistence
- **Mongoose** - MongoDB object modeling for Node.js
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing library
- **Cloudinary** - Cloud-based image and video management
- **CORS** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable management
- **Nodemon** - Development server with auto-restart

## 📁 Project Structure

```
server/
├── controllers/             # Request handlers and business logic
│   └── userController.js        # User authentication and profile management
├── lib/                    # Configuration and utility files
│   ├── cloudinary.js           # Cloudinary configuration
│   ├── db.js                   # Database connection setup
│   └── utils.js                # Utility functions (JWT, etc.)
├── middlewares/            # Custom middleware functions
│   └── auth.js                 # Authentication middleware
├── models/                 # Database schemas and models
│   └── User.js                 # User model definition
├── routes/                 # API route definitions
│   ├── userRoutes.js           # User-related routes
│   └── messageRoutes.js        # Message-related routes
├── .env                    # Environment variables (not in repo)
├── package.json            # Dependencies and scripts
└── server.js               # Main server entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB database (local or cloud)
- Cloudinary account for image uploads
- npm or yarn package manager

### Installation

1. **Navigate to the server directory**
   ```bash
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment variables file**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run server
   ```

   **Or start in production mode**
   ```bash
   npm start
   ```

### Available Scripts

- `npm run server` - Start development server with nodemon (auto-restart)
- `npm start` - Start production server
- `node server.js` - Start server directly

## 🔧 Environment Variables

Create a `.env` file in the server directory with the following variables:

```env
# Database Configuration
MONGODB_URI=your_mongodb_uri
# or use MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here

# Server Configuration
PORT=5000

# Cloudinary Configuration (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## 📊 Database Schema

### User Model
```javascript
{
  _id: ObjectId,
  email: String (required, unique),
  fullName: String (required),
  password: String (required, hashed),
  profilePic: String (default: ""),
  bio: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Message Model
```javascript
{
  _id: ObjectId,
  senderId: ObjectId (ref: User),
  receiverId: ObjectId (ref: User),
  text: String,
  image: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🔗 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| POST | `/signup` | Register new user | `{ fullName, email, password, bio }` |
| POST | `/login` | User login | `{ email, password }` |
| GET | `/check` | Check auth status | Headers: `{ token }` |
| PUT | `/update-profile` | Update user profile | `{ fullName, bio, profilePic? }` |

### Message Routes (`/api/messages`)

| Method | Endpoint | Description | Headers |
|--------|----------|-------------|---------|
| GET | `/:userId` | Get messages with user | `{ token }` |
| POST | `/send/:userId` | Send message to user | `{ token }` |

### Response Format

```javascript
// Success Response
{
  success: true,
  data: {...},
  message: "Operation successful"
}

// Error Response
{
  success: false,
  message: "Error description"
}
```

## 🔌 Socket.IO Events

### Client to Server Events
- `connection` - User connects to socket
- `disconnect` - User disconnects from socket

### Server to Client Events
- `getOnlineUsers` - Broadcast online users list
- `newMessage` - Send new message to recipient

## 🛡️ Security Features

### Authentication & Authorization
- **JWT Tokens**: Secure token-based authentication
- **Password Hashing**: bcryptjs for password security
- **Protected Routes**: Middleware-based route protection

### Data Validation
- Input sanitization and validation
- Required field checks
- Email format validation
- Password strength requirements

### CORS Configuration
- Cross-origin request handling
- Secure header configurations

## 🏗️ Architecture

### MVC Pattern
- **Models**: Database schemas and data logic
- **Views**: JSON API responses (no traditional views)
- **Controllers**: Business logic and request handling

### Middleware Stack
- **CORS**: Cross-origin resource sharing
- **JSON Parser**: Request body parsing
- **Authentication**: JWT token verification
- **Error Handling**: Centralized error management

### Real-time Features
- **Socket.IO Integration**: WebSocket connections
- **User Presence**: Online/offline status tracking
- **Message Broadcasting**: Instant message delivery

## 📱 Features Implementation

### User Management
- Secure user registration and login
- Profile picture upload with Cloudinary
- User profile updates
- Password encryption and verification

### Message System
- Real-time message sending and receiving
- Image message support
- Message history retrieval
- User-to-user private messaging

### File Upload
- Cloudinary integration for image storage
- Base64 image processing
- Automatic image optimization
- Secure upload handling

## 🔍 Development

### Code Structure
- **Modular Design**: Separated concerns across files
- **Error Handling**: Comprehensive try-catch blocks
- **Async/Await**: Modern JavaScript patterns
- **ES6 Modules**: Import/export syntax

### Database Operations
- **Mongoose Integration**: Object modeling for MongoDB
- **Connection Management**: Automatic reconnection
- **Query Optimization**: Efficient database queries
- **Data Validation**: Schema-level validation

### Performance Optimizations
- **Connection Pooling**: MongoDB connection efficiency
- **Image Optimization**: Cloudinary automatic optimization
- **JWT Efficiency**: Stateless authentication
- **Socket.IO Optimization**: Efficient real-time communication

## 🚀 Deployment

### Production Setup
1. Set production environment variables
2. Use PM2 or similar process manager
3. Configure reverse proxy (Nginx)
4. Set up SSL/TLS certificates
5. Configure monitoring and logging

### Environment Considerations
- Use MongoDB Atlas for cloud database
- Configure Cloudinary for production
- Set secure JWT secrets
- Enable CORS for production domains

## 🔧 Monitoring & Logging

### Error Handling
- Comprehensive error logging
- User-friendly error messages
- Database connection monitoring
- Socket connection tracking

### Performance Monitoring
- Request/response logging
- Database query performance
- Socket.IO connection metrics
- Memory usage tracking

## 🤝 Contributing

1. Follow the existing code structure and naming conventions
2. Use async/await for asynchronous operations
3. Add proper error handling for all operations
4. Test API endpoints thoroughly
5. Ensure database operations are optimized
6. Follow security best practices

## 📝 License

This project is part of the Real-Time Chat Application and follows the ISC License.

## 🙏 Acknowledgments

- **Express.js** for the robust web framework
- **Socket.IO** for real-time communication
- **MongoDB** for flexible data storage
- **Mongoose** for elegant MongoDB object modeling
- **Cloudinary** for image management services

---

For frontend setup documentation, see the [Frontend README.md](../client/README.md) file.

For full application documentation, see the main [README.md](../README.md) file.
