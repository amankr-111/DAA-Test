import cors from "cors"
import dotenv from "dotenv"
import express from "express"

dotenv.config();

const app = express();
const port = process.env.PORT ||5001;


app.listen(port,()=>{
    console.log(`connection on port ${port}`)
})

