import express from "express";
import db from "./config/database.js";
import measurementRoutes from "./routes/index.js";
import cors from "cors";
const app = express();

 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors());
app.use(express.json());
app.use('/measurement', measurementRoutes);
 
app.listen(3001, () => console.log('Server running at http://localhost:3001/measurement '));