const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const productionRoutes = require('./routes/productionRoutes');
const qualityControlRoutes = require('./routes/qualityControlRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server); // Create a Socket.IO instance

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/production', productionRoutes);
app.use('/api/qualitycontrol', qualityControlRoutes);

// Socket.IO setup
io.on('connection', (socket) => {
  console.log('A user connected');

  // You can handle events here
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start Server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
