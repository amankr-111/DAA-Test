import pool from '../config/db.js'


export const loginService = async (req) =>{

return {"email": req.body.email}
}