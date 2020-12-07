import axios from "axios";

const auth = {
    username: "mobile-app",
    password: "6c5ff9595cb769effc5f5a7e9d2e2305",
}
export default {
    getSingle: async (username) =>{
        let res = await axios.get("http://192.168.0.31:4000"+"/users/"+username,{auth});
        return res.data || [];
    },
    login: async (username,password) =>{
        let res = await axios.get("http://192.168.0.31:4000"+"/users/login/"+username,{params: {password: password},auth});
        return res.data || [];
    },
    register: async (body) =>{
        let res = await axios.post("http://192.168.0.31:4000"+"/users",body, {auth})
        return res.data || [];
    },
    update: async (username,body) =>{
        let res = await axios.put("http://192.168.0.31:4000"+"/users/"+username,body, {auth})
        return res.data || [];
    },
    updateSymptoms: async (username,body) =>{
        let res = await axios.put("http://192.168.0.31:4000"+"/users/symptoms/"+username,body, {auth})
        return res.data || [];
    },
    delete: async (username) =>{
        let res = await axios.delete("http://192.168.0.31:4000"+"/users/"+username, {auth})
        return res.data || [];
    }                 
}

