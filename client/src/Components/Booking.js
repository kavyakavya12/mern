import {useState,useEffect} from 'react';
import axios from 'axios';
import { Card } from '@mui/material';

function Booking() {

  const [studName,setName]=useState("");
  const [studNumber,setNumber]=useState(0);
  const [studDate , setDate]=useState("");
  const [studVenue , setVenue]=useState("");
  const [studArtist , setArt]=useState("");
  const [studList,setStudList]=useState([]);
const [upName,setUpName]=useState("");
  useEffect(()=>{
    axios.get("/display").then((response)=>{
      setStudList(response.data);
    })
  },[]);
  const addToList=()=>{
    axios.post("/newstud",{studName:studName, studNumber:studNumber,studDate:studDate,studVenue:studVenue,studArtist:studArtist,});
    console.log(studName,studNumber,studDate,studVenue,studArtist);
  }
  const updateName=(id)=>{
    axios.put("/upstud",{id:id,upName:upName,});
  }
  const deleteStud=(id)=>{
    axios.delete(`/delstud/${id}`);
    
  }

  return (
    <div>
          <h1> BOOKING </h1>

          <h1>CUSTOMER CRUD APP</h1>
          
<label>CUSTOMER NAME </label><br/>
<input type="text"
onChange={(event)=>setName(event.target.value)}/><br/>
<label>PHONE NUMBER</label><br/>
<input type="number"
onChange={(event)=>setNumber(event.target.value)}/><br/>

<label> BOOKING DATE </label><br/>
<input type="text"
onChange={(event)=>setDate(event.target.value)}/><br/>

<label> VENUE </label><br/>
<input type="text"
onChange={(event)=>setVenue(event.target.value)}/><br/>

<label> ARTIST </label><br/>
<input type="text"
onChange={(event)=>setArt(event.target.value)}/><br/>

<button onClick={addToList}>NEW CUSTOMER</button>
    <h1>CUSTOMER LIST</h1>
    {studList.map((val,key)=>{
  return <div key={key} class="student">
    <center>
    <Card sx={{ width: 400 ,height:450,float:'center',backgroundColor: "whitesmoke"}}>
    <h1>{val.name}</h1>
    <h1>{val.htno}</h1>
    <h1>{val.booking_date}</h1>
    <h1>{val.venue}</h1>
    <h1>{val.artist}</h1>
  <input type="text" onChange={(event)=>setUpName(event.target.value)} placeholder='Enter Name to Update'/>&nbsp;
  <button onClick={()=>updateName(val._id)}>Update Name</button><br/>
  <button onClick={()=>deleteStud(val._id)}>Delete</button>
  </Card>
  </center>
    </div>
     })}


    </div>
  );
}

export default Booking