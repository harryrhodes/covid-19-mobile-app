import axios from "axios";

const auth = {
    username: "admin-panel",
    password: "6c5ff9595cb769effc5f5a7e9d2e2305",
}
export default {
    getAll: async () =>{
        let res = await axios.get("http://localhost:4000"+"/users/",{auth});
        return res.data || [];
    },
    getSingle: async (username) =>{
        let res = await axios.get("http://localhost:4000"+"/users/"+username,{auth});
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
    update: async (username,body) =>{
        let res = await axios.put("http://localhost:4000"+"/users/"+username,body, {auth})
        return res.data || [];
    }               
}

