import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ loading: true, data: null });

  const setUserData = (data) => {
    setUser({data: data});
  };

  useEffect(() => {
    setUser({ loading: false, data: JSON.parse(window.localStorage.getItem('userData'))});
  }, []);
//2. if object with key 'authData' exists in localStorage, we are putting its value in auth.data and we set loading to false. 
//This function will be executed every time component is mounted (every time the user refresh the page);

  useEffect(() => {
    window.localStorage.setItem('userData', JSON.stringify(user.data));
  }, [user.data]);
// 1. when **auth.data** changes we are setting **auth.data** in localStorage with the key 'authData'.

  return (
    <UserContext.Provider value={{ user, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;