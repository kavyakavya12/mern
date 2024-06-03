import React from 'react'
import { Button, Card } from '@mui/material'
import a from './images/s1.jpg'
import b from './images/s2.jpg'
import c from './images/d1.jpg'
import d from './images/c1.jpg'
import e from './images/c3.jpg'
import f from './images/c2.jpg'
import g from './images/d2.jpg'
import h from './images/c4.jpg'
import i from './images/m1.jpg'
import { Link } from 'react-router-dom'
function Artistss() {
  return (
    <div>
    <div >
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={a} width="200" height="150"/>}<br/> PROFFESSION : SINGER <br/>  NAME : GEETHA MADHURI <br/> TIME : 1 HOUR <br/> PRICE : Rs.100000/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/book"> BOOK </Link></Button><br></br>
      </Card>
      
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={b} width="200" height="150"/>}<br/> PROFFESSION : SINGER <br/>  NAME : REVANTH <br/> TIME : 1 HOUR <br/> PRICE : Rs.120000/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/book"> BOOK </Link></Button><br></br>
      
      </Card>
      
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={c} width="200" height="150"/>}<br/> PROFFESSION : DANCER <br/>  NAME : YASH <br/> TIME : 1 HOUR <br/> PRICE : Rs.200000/-<br/></h5>
      <Button variant="outlined" >
            <Link to="/book"> BOOK </Link></Button><br></br>
      
      </Card>
      <br/>
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={d} width="200" height="150"/>}<br/> PROFFESSION : COMEDIAN <br/>  NAME : SUDHEER <br/> TIME : 1 HOUR <br/> PRICE : Rs.80000/-<br/></h5>
      <Button variant="outlined" >
            <Link to="/book"> BOOK </Link></Button><br></br>
      <br/>
      </Card>
      <br/>
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={e} width="200" height="150"/>}<br/> PROFFESSION : STANDUP COMEDIAN <br/>  NAME : Zakir Khan <br/> TIME : 1 HOUR <br/> PRICE : Rs.100000/-<br/></h5>
      <Button variant="outlined" >
            <Link to="/book"> BOOK </Link></Button><br></br>
      <br/>
      </Card>
      <br/>
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={f} width="200" height="150"/>}<br/> PROFFESSION : COMEDIAN <br/>  NAME : ADHI <br/> TIME : 1 HOUR <br/> PRICE : Rs.80000/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/book"> BOOK </Link></Button><br></br>
      <br/>
      </Card>
      <br/>
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={g} width="200" height="150"/>}<br/> PROFFESSION : DANCER <br/>  NAME : SHEKAR  <br/> TIME : 1 HOUR <br/> PRICE : Rs.100000/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/book"> BOOK </Link></Button><br></br>
      <br/>
      </Card>
      <br/>
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={h} width="200" height="150"/>}<br/> PROFFESSION : STANDUP COMEDIAN <br/>  NAME : Swati Sachdeva <br/> TIME : 1 HOUR <br/> PRICE : Rs.100000/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/book"> BOOK </Link></Button><br></br>
      <br/>
      </Card>

      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={i} width="200" height="150"/>}<br/> PROFFESSION : MAGICIAN <br/>  NAME :  Nikhil Raj <br/> TIME : 1 HOUR <br/> PRICE : Rs.100000/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/book"> BOOK </Link></Button><br></br>
      <br/>
      </Card>
      <br/>
      </div>
</div>
  )
}

export default Artistss