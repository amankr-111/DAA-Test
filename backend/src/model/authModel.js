import pool from '../config/db.js'
import argon2 from 'argon2'

export const loginService = async (req) =>{

    let email = req.body.email
    let pass = req.body.password
    
    const result = await pool.query(`select mu.first_name, mu.password from app.m_users as mu where mu.email_id = $1`,[email])
    const hashedPass = result.rows[0].password 
    const isMatched = await argon2.verify(hashedPass, pass)

return isMatched
}

