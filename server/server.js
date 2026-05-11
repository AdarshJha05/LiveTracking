import express from 'express';
import http from 'http';
import cors from 'cors';
import mongoose from 'mongoose';
import orderRoutes from './routes/order.routes.js';
import { Server } from "socket.io";
import startTracking from './socket/tracking.js';

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, cors({
    origin: "*"
}));


const PORT = 5000;

app.use('/orders', orderRoutes);


mongoose.connect('mongodb://localhost:27017/foodDB')
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log("MongoDB connection error:", err));

io.on("connection", (socket) => {
    console.log("New Client Connected: ", socket.id);
});

startTracking(io);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});