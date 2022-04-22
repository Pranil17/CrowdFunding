import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess, logoutUser } from "./userSlice";

export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    }catch (err){
        dispatch(loginFailure());
    }
};

export const logout = async (dispatch,user)=>{
    dispatch(logoutUser());
}