import { useState } from "react";
import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {

  const [order,setOrder] = useState({
        branch: '',
        department: '',
        session: '',
        consultant: '',
        
  });
  const [order2,setOrder2] = useState({
    amount: '',
    ddate: '',
    time: ''
    
  });
  const [order3,setOrder3] = useState({
    name: '',
    phone: '',
    email: ''
    
  });
 
  

  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    const role = JSON.parse(localStorage.getItem("role"));

    // console.log(user)
    // console.log(role)

    if (user && role) {
      dispatch({ type: "LOGIN", payload: {user:user, role:role} });
      // console.log(dispatch(payload))payload: { user: data }
    }
  }, []);

  // console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch , order , setOrder,order2 , setOrder2,order3 , setOrder3}}>
      {children}
    </AuthContext.Provider>
  );
};
