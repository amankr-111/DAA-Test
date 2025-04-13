import pool from '../config/db.js'
import argon2 from 'argon2'
import { v4 as uuidv4 } from 'uuid';
import {sendMail} from '../common/mailer.js'
import dotenv from 'dotenv'

dotenv.config()

const UUID = uuidv4()

export const loginService = async (req) =>{

    let email = req.body.email
    let pass = req.body.password
    
    const result = await pool.query(`select mu.first_name, mu.password from app.m_users as mu where mu.email_id = $1`,[email])
    const hashedPass = result.rows[0].password 
    const isMatched = await argon2.verify(hashedPass, pass)

return isMatched
}

export const forgotService = async (req) => {
    try {
      // Send a static test email
      const toEmail = 'ashutosh615singh@gmail.com';
      const subject = 'Forgot Password';
      const text = 'This is a static forgot password email.';
      const html = '<p>This is a <b>static</b> forgot password email.</p>';
  
      const response = await sendMail(toEmail, subject, text, html);
  
      return response;
    } catch (error) {
      console.error(error);
      return 'Failed to send static mail';
    }
  };
