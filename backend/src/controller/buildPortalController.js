import { handleResponse } from "../common/response.js";
import { addEventService, getEventsService } from "../model/buildPortalModel.js";



export const addEvent = async (req,res,next) => {
    try{
     const result = addEventService(req);
     handleResponse(res,200,"Event Added SuccessFully",result);
    }
    catch(error){
       next(error)
    }

}


export const getEvents = async(req,res,next) =>{
    try{
        const result = await getEventsService(req);
        handleResponse(res,200,"you event",result)
    }
    catch(error){
        next(error);
    }
}