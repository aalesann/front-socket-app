import { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import { types } from "../types/types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
    const [authState, authDispatch ] = useReducer(authReducer, { logged: false });

    const login = (data) => {
        authDispatch({
            type: types.LOGIN,
            payload: data
        })
    }


    return (
        <AuthContext.Provider value={{
            authState,
            authDispatch,
            login
        }}>
            { children }
        </AuthContext.Provider>
    )


}
