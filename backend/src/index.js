import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import pool from "./config/db.js"
import userRoutes from './routes/userRoutes.js'
import errHandler from "./middlewares/errorHandler.js"

dotenv.config();

const app = express();
const port = process.env.PORT ||5001;
app.use(express.json());
app.use(cors());




app.use("/api",userRoutes);
app.use(errHandler)

app.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT current_database()");
        res.send(`The database name is: ${result.rows[0].current_database}`);
    } catch (err) {
        console.error("Error querying DB:", err.message);
        res.status(500).send("Internal Server Error");
    }
});


app.listen(port,()=>{
    console.log(`connection on port ${port}`)
})

