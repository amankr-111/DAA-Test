import { handleResponse } from "../common/response.js";
import { getAllUseService } from "../model/userModel.js";


export const getAllUser = async (req,res,next) =>{
    try{
     const users = await getAllUseService();
     handleResponse(res,201,"All Users",users);
    }catch(e){
   next(e);
    }
}