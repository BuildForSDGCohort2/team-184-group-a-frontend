import axios from "axios";
import {toast} from "react-toastify";

//header config
const config = {
    headers:{
       "Content-Type":"multipart/form-data"
    }
};

//Clieent registartion API
export const farmer = (firstname, lastname, username, location, address, phone, email, photo) => {

    const fd = new FormData();
    fd.append("firstname",firstname);
    fd.append("lastname",lastname);
    fd.append("username", username);
    fd.append("location",location);
    fd.append("address",address);
    fd.append("phone",phone);
    fd.append("email",email);
    fd.append("photo",photo);
    
    axios.post("https://mazao-app.herokuapp.com/viewsModel/farmers/", fd, config).then((res) => {
        toast.success("Input Successful");
    })
    .catch((err) => {
    });
};