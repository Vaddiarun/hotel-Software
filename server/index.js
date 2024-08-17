import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import menuRoutes from './routes/menu.routes.js';
import CategoryRoutes from "./routes/category.routes.js";
import orderRoutes from "./routes/orders.routes.js"
import signInRoutes from "./routes/signin.routes.js"
import dashboardRoutes from "./routes/dashboard.routes.js"
import stockRoutes from "./routes/stock.routes.js"; 
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods:['POST',"GET"],
    credentials: true
}));
app.use(cookieParser())

const PORT = process.env.PORT || 5000;

const connectDB = async () => {
    mongoose.connect('mongodb+srv://chinarayudubellary7:Sy8Den3Tm4Bo2m2C@chinna.kbdkakr.mongodb.net/?retryWrites=true&w=majority&appName=CHINNA')
    })
}

connectDB();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.get("/", (req, res) => {
    return res.json("Sample Data");
})

app.use("/api/v1/menu", menuRoutes);
app.use("/api/v1/categories", CategoryRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/user", signInRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);
app.use("/api/v1/stock", stockRoutes);
