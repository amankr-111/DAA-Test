import pool from '../config/db.js'


export const loginService = async (req) =>{
return JSON({username:req.body.email,password:req.body.password})
}