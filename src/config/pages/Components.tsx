import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css';
import AButton from '../components/BUTTON/AButton';
import ADate from '../components/DATE PICKER/ADate';
import AIcon from '../components/ICON BUTTON/AIcon';
import AInput from '../components/INPUT/AInput';
import ASelect from '../components/SELECT/ASelect';
import ASwitch from '../components/SWITCH/ASwitch';
import ATable from '../components/TABLE/ATable';
import { BrowserRouter as Routers ,Routes ,Route ,Link, useNavigate } from 'react-router-dom'


export default function Components() {
  
    let tableData = [
        {
            brand: "Samsung",
            model: "A30",
            price: "40000",
            camera: "40px",
            ram: "8gb",
            rom : "128gb"
        },
        {
            brand: "Samsung",
            model: "A10",
            price: "40000",
            camera: "40px",
            ram: "4gb",
            rom : "128gb"
        },
        {
            brand: "Samsung",
            model: "A20",
            price: "40000",
            camera: "40px",
            ram: "4gb",
            rom : "128gb"
        },
        {
            brand: "Vivo",
            model: "Y20",
            price: "20000",
            camera: "40px",
            ram: "2gb",
            rom : "32gb"
        },
        {
            brand: "Vivo",
            model: "Y11",
            price: "20000",
            camera: "40px",
            ram: "3gb",
            rom : "32gb"
        },
        {
            brand: "Vivo",
            model: "Y15",
            price: "30000",
            camera: "40px",
            ram: "4gb",
            rom : "64gb"
        },
        {
            brand: "Motorola",
            model: "123",
            price: "5000",
            camera: "2px",
            ram: "2gb",
            rom : "32gb"
        },
        {
            brand: "Iphone",
            model: "12",
            price: "300000",
            camera: "40px",
            ram: "8gb",
            rom : "128gb"
        },
        {
            brand: "Iphone",
            model: "13",
            price: "300000",
            camera: "40px",
            ram: "8gb",
            rom : "128gb"
        },
        {
            brand: "Iphone",
            model: "X",
            price: "300000",
            camera: "40px",
            ram: "8gb",
            rom : "128gb"
        },
    ]
      
    let option=["karachi" , "quetta", "peshawar" , "lahore" ]
     
const navigate = useNavigate()

    
    return (
       <div className='main text-center'>
       <h1 className='mainHeading'>Boiler Plate Components</h1>
    <div className="button container my-4 p-4">
      
    <h2 className=' text-center bg-dark text-light '>Button</h2>
       
       <AButton 
       label='BUTTON 1'
       clicked={()=>{console.log("this is button 1")}}
       /> <br />
          <AButton 
       label='BUTTON 2'
       clicked={()=>{console.log("this is button 2")}}
       /> <br />
          <AButton 
       label='BUTTON 3'
       clicked={()=>{console.log("this is button 3")}}
       /> <br />
    </div>
       
    
    <div className="button container">
    <h2  className=' text-center bg-dark text-light ' >Table</h2>
    
    <ATable 
    
    data={tableData}
    cols={
      [
        {
        heading:"BRAND",
        key: "brand",
      },
      {
        heading:"MODEL",
        key: "model",
      },
        {
        heading:"PRICE",
        key: "price",
      }, 
       {
        heading:"CAMERA",
        key: "camera",
      },
      {
        heading:"RAM",
        key: "ram",
      },
      {
        heading:"ROM",
        key: "rom",
      },
      
      
    ] 
    }
    
    />
    
    </div>
    
      <div className="button container my-4 p-4">
        <h2  className=' text-center bg-dark text-light '>SELECT</h2>
    <ASelect
    label='CITY'
    option={option}      
    />
    
       </div> 
      
  
    <div className="button container my-4 p-4 ">
    
    <h2  className=' text-center bg-dark text-light '> date picker</h2>
    
    <ADate
    change={(e:any)=>{
    alert(e.target.value);
    }}
    />
    
    
    </div>
    
    
    
    <div className="button container my-4 p-4 ">
    <h2  className=' text-center bg-dark text-light '>switch</h2>
    
    <ASwitch
    change={(e:any)=>{
    e.target.checked?alert("checked"):alert("not checked");
    } }
    label='ali'/>
    
    </div>
    
    <div className="button container my-4 p-4">
    <h2  className=' text-center bg-dark text-light '>icon btutton</h2>
    
    
    <AIcon 
    label='click here'
    click={()=>alert("hello")}
    />
    
    </div>
    
    
    
    <div className="button container my-4 p-4">
      <h2  className=' text-center bg-dark text-light '>input</h2>
    <AInput
    label='ADD LIST'
    change={(e:any)=>{
      console.log(e.target.value);
    }}
    
    />
    
    
    </div>
    
    <h1 className='mainHeading'>Boiler Plate Screen</h1>
    
    <div className="button container my-4 p-4">
      <h2  className=' text-center bg-dark text-light '>login screen</h2>
    
      <button className='btn btn-danger' onClick={()=>{
        navigate('../Login')
      }}  >Login</button>
  
    </div>
    

    
    <div className="button container my-4 p-4">
      <h2  className=' text-center bg-dark text-light '>signup screen</h2>
    
      <button className='btn btn-danger' onClick={()=>{
        navigate('../Signup')
      }}  >Signup</button>
  
    </div>
    
  
    <div className="button container my-4 p-4">
      <h2  className=' text-center bg-dark text-light '>Dashboard screen</h2>
    
      <button className='btn btn-danger' onClick={()=>{
        navigate('../Dashboard')
      }}  >Dashboard</button>
  
    </div>
    





       </div>
      );
}
