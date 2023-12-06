import jwt from "jsonwebtoken"
import { User } from "../model/user";


export const isAuthenticated = async(req, res)=>{
    // extract token from cookie 
    const {token} = req.cookies;

    //check token exist or not
    if(!token){
        return res.status(400).json({
            success: false,
            message:"Please login!"
        })
    }

    //verify token 
    const decode = jwt.verify(token, "dfdfdsfdsfdsb")

    // check user exist or not 
    req.user = await User.findById(decode._id)

    next()
}