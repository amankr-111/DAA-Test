import pool from "../config/db.js";

export const addEventService = async (req) =>{
    const { asser_id, cand_id, event_title, event_subtitle, start_time, end_time } = req.body;
    const values = [asser_id, cand_id, event_title, event_subtitle, start_time, end_time];
    const result = await pool.query("Insert into app.t_slot (asser_id,cand_id,event_title,event_subtitle,start_time,end_time) values ($1,$2,$3,$4,$5,$6)",values);
return result;
}



export const getEventsService = async (req) => {
const {asser_id,survey_id} = req.query;
const values = [asser_id];
const result = (await pool.query("Select * from app.t_slot where asser_id = $1",values)).rows;
return result;
}