# Real-Time Chat Application - Frontend

A modern React-based frontend for a real-time chat application built with Vite, Tailwind CSS, and Socket.IO. This client provides an intuitive and responsive user interface for seamless messaging experience.

## ✨ Features

- **Real-time Messaging Interface**: Instant message display and sending
- **User Authentication UI**: Login and signup forms with validation
- **Profile Management**: Update profile picture, name, and bio
- **Responsive Design**: Mobile-first design that works on all devices
- **Image Upload**: Drag-and-drop image sharing in conversations
- **Online Status Indicators**: Visual indicators for user availability
- **Search Functionality**: Find users quickly with real-time search
- **Message Timestamps**: Display formatted message times
- **Unread Message Badges**: Visual indicators for unseen messages
- **Smooth Animations**: Enhanced UX with transitions and hover effects

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Socket.IO Client** - Real-time bidirectional communication
- **React Router DOM** - Client-side routing and navigation
- **Axios** - Promise-based HTTP client for API calls
- **React Hot Toast** - Beautiful toast notifications
- **ESLint** - Code linting and quality assurance

## 📁 Project Structure

```
client/
├── public/
│   └── favicon.svg           # App favicon
├── src/
│   ├── assets/              # Static assets (images, icons)
│   │   ├── arrow_icon.png
│   │   ├── avatar_icon.png
│   │   ├── logo.png
│   │   ├── search_icon.png
│   │   └── ...
│   ├── components/          # Reusable React components
│   │   ├── ChatContainer.jsx    # Main chat interface
│   │   ├── RightSidebar.jsx     # User info sidebar
│   │   └── Sidebar.jsx          # User list sidebar
│   ├── context/             # React Context providers
│   │   ├── AuthContext.jsx      # Authentication state
│   │   └── ChatContext.jsx      # Chat functionality
│   ├── lib/                 # Utility functions
│   │   └── utils.js             # Helper functions
│   ├── pages/               # Page components
│   │   ├── HomePage.jsx         # Main chat page
│   │   ├── LoginPage.jsx        # Login interface
│   │   └── ProfilePage.jsx      # Profile management
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.jsx             # App entry point
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.js           # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to the client directory**
   ```bash
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 UI Components

### Core Components

- **ChatContainer**: Main messaging interface with message display and input
- **Sidebar**: User list with search functionality and online indicators
- **RightSidebar**: User profile information and settings
- **HomePage**: Main application layout combining all components
- **LoginPage**: Authentication interface for login/signup
- **ProfilePage**: User profile management interface

### Context Providers

- **AuthContext**: Manages user authentication state and functions
- **ChatContext**: Handles messaging, user selection, and real-time updates

## 🔧 Configuration

### Environment Variables

No environment variables are required for the frontend. All API endpoints are configured to communicate with the backend server.

### Tailwind CSS

The application uses Tailwind CSS for styling with custom configurations:
- Custom color palette for the chat theme
- Responsive breakpoints for mobile-first design
- Custom backdrop blur effects for modern UI

### Vite Configuration

Optimized Vite setup with:
- React plugin for fast refresh
- Tailwind CSS integration
- Development server configuration

## 🎯 Key Features Implementation

### Real-time Communication
- Socket.IO client integration for instant messaging
- Real-time user status updates
- Message delivery confirmations

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Adaptive layouts for different screen sizes
- Touch-friendly interface elements

### User Experience
- Smooth scrolling for message containers
- Loading states and error handling
- Intuitive navigation and interactions

## 🔗 API Integration

The frontend communicates with the backend through:
- **REST API** calls using Axios for user management
- **Socket.IO** connections for real-time messaging
- **File uploads** for profile pictures and images

### API Endpoints Used
- Authentication endpoints (`/api/auth/*`)
- Message endpoints (`/api/messages/*`)
- User management endpoints

## 🎨 Styling Guide

### Color Scheme
- Primary: Purple/Violet gradients
- Background: Dark theme with glass morphism effects
- Text: White and gray variations for readability
- Accents: Green for online status, red for notifications

### Design Principles
- Minimalist and clean interface
- Consistent spacing and typography
- Smooth transitions and hover effects
- Accessibility-first approach

## 📱 Mobile Responsiveness

- Adaptive sidebar that hides on mobile when chat is active
- Touch-optimized buttons and input fields
- Responsive image sizing and layouts
- Mobile-friendly navigation patterns

## 🚀 Build and Deployment

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

The build process:
1. Optimizes and bundles all assets
2. Minifies CSS and JavaScript
3. Generates optimized images
4. Creates production-ready files in `dist/`

## 🔍 Development

### Code Quality
- ESLint configuration for consistent code style
- Component-based architecture for maintainability
- Custom hooks for reusable logic
- Context providers for state management

### Performance Optimizations
- Code splitting with React.lazy (if implemented)
- Image optimization and lazy loading
- Efficient re-rendering with React optimization techniques
- Vite's fast HMR for development

## 🤝 Contributing

1. Follow the existing code structure and naming conventions
2. Use Tailwind CSS for styling instead of custom CSS
3. Ensure components are responsive and accessible
4. Test on multiple screen sizes before submitting
5. Run `npm run lint` to check code quality

## 📝 License

This project is part of the Real-Time Chat Application and follows the same licensing terms.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vite** for the incredible build tool
- **Tailwind CSS** for the utility-first CSS framework
- **Socket.IO** for real-time communication capabilities

---

For backend setup and full application documentation, see the [Backend README.md](../server/README.md) file.\n
For full application documentation, see the main [README.md](../README.md) file.