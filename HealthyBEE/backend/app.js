import express from "express";
const app = express();
import mongoose from 'mongoose';
import blogRouter from "./routes/blogRoutes";
import router from "./routes/userRoutes";
import cors from 'cors';
app.use(cors());
app.use(express.json());


app.use("/api/user", router);
app.use("/api/blog", blogRouter);


mongoose.connect('mongodb+srv://Bhavya:Shivuma11@cluster0.f0rke.mongodb.net/HealthyBEE?retryWrites=true&w=majority').then(() => {
     console.log('Database is successfully connected')
}).catch((err) => {
     console.log("error: " + error);
})








app.listen(2000, () => {
     console.log("port up");
})