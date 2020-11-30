import axios from "axios";

const auth = {
    username: "mobile-app",
    password: "6c5ff9595cb769effc5f5a7e9d2e2305",
}
export default {
    getSingle: async (user) =>{
        let res = await axios.get("http://localhost:4000"+"/users/"+user,{auth});
        return res.data || [];
    },
    login: async (username,password) =>{
        let res = await axios.get("http://localhost:4000"+"/users/login/"+username,{params: {password: password},auth});
        return res.data || [];
    },
    register: async (body) =>{
        let res = await axios.post("http://localhost:4000"+"/users",body, {auth})
        return res.data || [];
    },
    update: async (user,body) =>{
        let res = await axios.put("http://localhost:4000"+"/users/"+user,body, {auth})
        return res.data || [];
    }               
}

