import { getAllUseService } from "../model/userModel.js";

const handleResponse = (res,status,message,data=null) =>{
    res.status(status).json({
        status,
        message,
        data,
    });
}


export const getAllUser = async (req,res,next) =>{
    try{
     const users = await getAllUseService();
     handleResponse(res,201,"All Users",users);
    }catch(e){
   next(e);
    }
}