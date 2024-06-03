import React from 'react'
import { Button, Card } from '@mui/material'
import a from './images/v1.jpg'
import b from './images/v2.jpg'
import c from './images/v3.jpg'
import d from './images/v4.jpg'
import e from './images/v5.jpg'
import f from './images/v6.jpg'
import g from './images/v7.jpg'
import h from './images/v8.jpg'
import i from './images/v9.jpg'
import { Link } from 'react-router-dom'
function Venue() {
  return (
    <div>
    <div >
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={a} width="200" height="150"/>}<br/> LOCATION : MUMBAI <br/>  NAME : The Avenue <br/> TIME : 1 DAY <br/> PRICE : Rs.10000000/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/cater"> BOOK </Link></Button><br></br>
      
      </Card>
      
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={b} width="200" height="150"/>}<br/> LOCATION : HYDERABAD <br/>  NAME : Paradise Gardens <br/> TIME : 1 DAY <br/> PRICE : Rs.12000000/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/cater"> BOOK </Link></Button><br></br>
      
      </Card>
      
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={c} width="200" height="150"/>}<br/> LOCATION : BANGLORE <br/>  NAME : Atlantis <br/> TIME : 1 DAY <br/> PRICE : Rs.20000000/-<br/></h5>
      <Button variant="outlined" >
            <Link to="/cater"> BOOK </Link></Button><br></br>
      </Card>
      <br/>
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={d} width="200" height="150"/>}<br/> LOCATION : DELHI <br/>  NAME : The Blue Fin <br/> TIME : 1 DAY <br/> PRICE : Rs.8000000/-<br/></h5>
      <Button variant="outlined" >
            <Link to="/cater"> BOOK </Link></Button><br></br>
      <br/>
      </Card>
      <br/>
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={e} width="200" height="150"/>}<br/> LOCATION : ANDHRA PRADESH <br/>  NAME : The Greenhouse <br/> TIME : 1 DAY <br/> PRICE : Rs.1000000/-<br/></h5>
      <Button variant="outlined" >
            <Link to="/cater"> BOOK </Link></Button><br></br>
      <br/>
      </Card>
      <br/>
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={f} width="200" height="150"/>}<br/> LOCATION : VIZAG <br/>  NAME : Big Orchid <br/> TIME : 1 DAY <br/> PRICE : Rs.8000000/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/cater"> BOOK </Link></Button><br></br>
      <br/>
      </Card>
      <br/>
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={g} width="200" height="150"/>}<br/> LOCATION : MUMBAI <br/>  NAME : Lotus Lakes  <br/> TIME : 1 DAY <br/> PRICE : Rs.1000000/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/cater"> BOOK </Link></Button><br></br>
      <br/>
      </Card>
      <br/>
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={h} width="200" height="150"/>}<br/> LOCATION : GOA <br/>  NAME : The Golden Plaza <br/> TIME : 1 DAY <br/> PRICE : Rs.1000000/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/cater"> BOOK </Link></Button><br></br>
      <br/>
      </Card>

      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={i} width="200" height="150"/>}<br/> LOCATION : TAMILNADU <br/>  NAME : Squeeze Spot  <br/> TIME : 1 DAY <br/> PRICE : Rs.1000000/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/cater"> BOOK </Link></Button><br></br>
      <br/>
      </Card>
      <br/>
      </div>
</div>
  )
}

export default Venue