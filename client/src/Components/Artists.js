import React,{useState} from 'react' 
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

function Artists() {
  
  
  return (
    
    <div>
   
        <div sx={{float:'left'}}>
          <Card sx={{ width: 400 ,height:300,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
          <h5>{<img src={a} width="200" height="200"/>}<br/></h5>
          <Button variant="outlined" >
            <Link to="/sing"> SINGERS </Link></Button><br></br>
          </Card>
      
      <Card sx={{ width: 400 ,height:300,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={g} width="200" height="200"/>}<br/> </h5>
      <Button variant="outlined">  
        <Link to="/dance">  DANCERS </Link>  </Button><br></br>
      
      </Card>
      
      <Card sx={{ width: 400 ,height:300,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={d} width="200" height="200"/>}<br/> </h5>
      <Button variant="outlined" >
      <Link to="/com">  COMEDIANS </Link>  </Button><br></br>
      
      </Card>
      <br/>
      <Card sx={{ width: 400 ,height:300,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={e} width="200" height="180"/>}<br/><br/></h5>
      <Button variant="outlined" >
      <Link to="/stc">  STANDUPCOMEDIANS </Link>  </Button><br></br>
      <br/>
      </Card>
      <br/>
      <Card sx={{ width: 400 ,height:300,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={b} width="200" height="200"/>}<br/> </h5>
      <Button variant="outlined" >
      <Link to="/mb">  MUSIC BAND </Link>  </Button><br></br>
      <br/>
      </Card>
      <br/>
      <Card sx={{ width: 400 ,height:300,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={f} width="200" height="200"/>}<br/> </h5>
      <Button variant="outlined" >
      <Link to="/ac">  ANCHOR </Link>  </Button><br></br>
      <br/>
      </Card>
      <br/>
      <Card sx={{ width: 400 ,height:300,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={g} width="200" height="200"/>}<br/></h5>
      <Button variant="outlined" >
      <Link to="/mc">  MAGICIANS </Link>  </Button><br></br>
      <br/>
      </Card>
      
      <br/>
      </div>
</div>


  )
}

export default Artists