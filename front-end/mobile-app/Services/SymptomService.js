import axios from "axios";

const auth = {
    username: "mobile-app",
    password: "6c5ff9595cb769effc5f5a7e9d2e2305",
}
export default {
    getAll: async () =>{
        let res = await axios.get("http://192.168.0.31:4000"+"/symptoms",{auth});
        return res.data || [];
    },
}