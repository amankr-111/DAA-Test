import pool from '../config/db.js'



export const getAllUseService = async () =>{
    const result = await pool.query("Select * from app.m_users");
    return result.rows;
}