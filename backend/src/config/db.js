import pkg from "pg";
import dotenv from "dotenv"
const {Pool} = pkg;
dotenv.config();



const pool = new Pool({
    user:process.env.DB_USERNAME,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
})

pool.on("connect",() =>{
    console.log("connection with data base established")
})


export default pool;