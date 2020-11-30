import axios from "axios";

const auth = {
    username: "admin=panel",
    password: "6c5ff9595cb769effc5f5a7e9d2e2305",
}
export default {
    create: async (symptom,body) =>{
        let res = await axios.post("http://localhost:4000"+"/symptoms/"+symptom,body, {auth})
        return res.data || [];
    },
    getAll: async () =>{
        let res = await axios.get("http://localhost:4000"+"/symptoms",{auth});
        return res.data || [];
    },
    update: async (symptom,body) =>{
        let res = await axios.put("http://localhost:4000"+"/symptoms/"+symptom,body, {auth})
        return res.data || [];
    },
    delete: async (symptom,body) =>{
        let res = await axios.delete("http://localhost:4000"+"/symptoms/"+symptom, {auth})
        return res.data || [];
    }  
}