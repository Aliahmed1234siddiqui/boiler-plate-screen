import React, { useState } from 'react';
import logo from './logo.svg';
import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextField, Button } from '@mui/material';
import { type } from 'os';
import { stringify } from 'querystring';
import { useNavigate } from 'react-router-dom';
type useModel = {
  name:string,
  fatherName:string,
  email: string,
  Address:string,
  password: string,

}


export default function Signup() {
const[model , setModel] = useState<useModel>({
  email:"",
  password:"",
  name:"",
  Address:"",
  fatherName:"",
})




let login= ()=>{
  console.log(model);

}

  return (
    <div className="login text-center  ">
   
   <div className="maino   mx-auto  "  >
   <div className="sub row">
 
<div className="d-flex ">
<TextField className=" col-md-5 m-3 " onChange={(e)=>{setModel({ ...model , name:e.target.value,})}} label="NAME" type='text'  variant='standard' ></TextField>
<TextField className=" col-md-5 m-3" onChange={(e)=>{setModel({ ...model , fatherName:e.target.value,})}} label="FATHER NAME" type='text'  variant='standard' ></TextField>
</div>
<div className="d-flex ">
<TextField  className="col-md-5 m-3 " onChange={(e)=>{setModel({...model , email:e.target.value} )}} label="EMAIL" type='email'  variant='standard' ></TextField>
<TextField className=" col-md-5 m-3" onChange={(e)=>{setModel({ ...model , password:e.target.value,})}} label="PASSWORD" type='password'  variant='standard' ></TextField>
</div>
<TextField className="m-3 col-md-10" onChange={(e)=>{setModel({ ...model , Address:e.target.value,})}} label="ADDRESS" type='text'  variant='standard' ></TextField>

        <Button className="m-3 col-md-10" variant="contained" onClick={login}>Signup</Button>
        </div>

   </div>
    </div>
  );
}


