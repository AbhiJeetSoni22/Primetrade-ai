# Primetrade AI - Frontend

A React + Vite based frontend application for the Primetrade AI trading platform. This application provides an intuitive user interface for authentication, task management, and trading operations.

## Overview

The Primetrade AI frontend is built with modern React and Vite technologies, offering a fast development experience with Hot Module Replacement (HMR). It connects to a FastAPI backend to provide a complete trading platform solution.

## Features

- **User Authentication**: Login and registration functionality
- **Dashboard**: View and manage trading tasks
- **Task Management**: Create, update, and manage trading tasks
- **RESTful API Integration**: Communicates with FastAPI backend via Axios
- **Responsive UI**: Clean and intuitive user interface

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Backend API running on `http://localhost:8000`

## Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

```
frontend/
├── src/
│   ├── api/              # API client configuration
│   ├── assets/           # Static assets
│   ├── components/       # Reusable React components
│   ├── pages/           # Page components (Auth, Dashboard, etc.)
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── styles/          # CSS files
├── public/              # Public static files
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## Scripts

### Development Server

Start the development server with HMR:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build the application for production:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Lint

Check code quality with ESLint:
```bash
npm run lint
```

## Dependencies

- **React**: UI library
- **React Router**: Client-side routing
- **Axios**: HTTP client for API requests
- **Vite**: Fast build tool and dev server

## API Integration

The frontend communicates with the FastAPI backend through axios. API endpoints are configured in `src/api/api.js`.

### Backend API

The backend should be running on `http://localhost:8000`. Main endpoints:
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `GET /tasks` - Get all tasks
- `POST /tasks` - Create new task
- `PUT /tasks/{id}` - Update task
- `DELETE /tasks/{id}` - Delete task

## Environment Variables

Create a `.env` file in the frontend directory for environment-specific configuration:

```
VITE_API_URL=http://localhost:8000
```

## Development Workflow

1. Ensure the backend API is running
2. Run `npm run dev` to start the development server
3. Make changes to components and see hot module replacement in action
4. Use `npm run build` to create a production build

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### API Connection Issues
- Verify the backend API is running on the correct port
- Check CORS configuration in the backend
- Ensure the `VITE_API_URL` environment variable is correctly set

### Port Already in Use
- The development server uses port 5173 by default
- To use a different port: `npm run dev -- --port 3000`

## Contributing

1. Create a feature branch
2. Make your changes
3. Test the application
4. Submit a pull request

## License

This project is part of Primetrade AI platform.

## Support

For issues or questions, please open an issue in the repository or contact the development team.
