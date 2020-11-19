import axios from "axios";

const auth = {
    username: "mobile-app",
    password: "6c5ff9595cb769effc5f5a7e9d2e2305",
}
export default {
    getAll: async (username) =>{
        let res = await axios.get(process.env['API_URL']+"/users");
        return res.data || [];
    },
    getSingle: async (username) =>{
        let res = await axios.get(process.env['API_URL']+"/users"+username);
        return res.data || [];
    },
    login: async (username,password) =>{
        let res = await axios.get("http://localhost:4000"+"/users/login/"+username,{params: {password: password},auth});
        return res.data || [];
    }        

}