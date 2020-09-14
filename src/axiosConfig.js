import axios from "axios";
import {toast} from "react-toastify";

//header config
const config = {
    headers:{
       "Content-Type":"multipart/form-data"
    }
};

//Clieent registartion API
export const Farmer =(firstname, lastname, username, location ,county, phone, email, photo)=>{

    const fd = new FormData()
    fd.append("firstname",firstname)
    fd.append("lastname",lastname)
    fd.append("username", username)
    fd.append("location",location)
    fd.append("county",county)
    fd.append("phone",phone)
    fd.append("email",email)
    fd.append("photo",photo)
    
    axios.post("url", fd, config)
    .then(res => {
        console.log(res)
        toast.success("Input Successful")
    })
    .catch(err => {
        console.error(err); 
    })
} 