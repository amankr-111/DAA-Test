import { handleResponse } from "../common/response.js";
import { loginService } from "../model/authModel.js"





export const login = async (req,res,next) => {
    try{
  const result = loginService(req);
  handleResponse(res,201,"User",result);
}
catch(e){
    next(e)
}
}