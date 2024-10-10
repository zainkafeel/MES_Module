# --- Frontend Build Stage ---
    FROM node:18 as frontend

    # Set the working directory
    WORKDIR /app/frontend
    
    # Copy package files and install dependencies
    COPY ./frontend/package*.json ./
    RUN npm install
    
    # Copy the rest of the frontend files
    COPY ./frontend/ .
    
    # Build the frontend application
    RUN npm run build
    
    # --- Backend Setup Stage ---
    FROM node:18 as backend
    
    # Set the working directory for the backend
    WORKDIR /app/backend
    
    # Copy package files and install dependencies
    COPY ./backend/package*.json ./
    RUN npm install
    
    # Copy the rest of the backend files
    COPY ./backend/ .
    
    # Copy built frontend files to serve as static assets
    COPY --from=frontend /app/frontend/dist ./public
    
    # Expose the port for the backend
    EXPOSE 3000
    
    # Start the backend server
    CMD ["node", "server.js"]
    