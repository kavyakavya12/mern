import React from 'react'
import { Button, Card } from '@mui/material'
import a from './images/a1.jpg'
import b from './images/a2.jpg'
import c from './images/a3.jpg'
import d from './images/a4.jpg'
import e from './images/a5.jpg'
import f from './images/a6.jpg'
import g from './images/a7.jpg'
import h from './images/a8.jpg'
import i from './images/a9.jpg'
import { Link } from 'react-router-dom'
function Catering() {
  return (
    <div>
    <div >
        <h1> STARTER </h1>
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={a} width="200" height="150"/>}<br/> DISH : PRAWN FRY <br/>  QUANTITY : 1 PLATE  <br/> PRICE : Rs.100/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/book"> BOOK </Link></Button><br></br>
      
      </Card>
      
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={b} width="200" height="150"/>}<br/>DISH : MEAT BALL <br/>  QUANTITY : 1 PLATE  <br/> PRICE : Rs.100/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/book"> BOOK </Link></Button><br></br>
      
      </Card>
      
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={c} width="200" height="150"/>}<br/> DISH : CHICKEN MAGISTIC<br/>  QUANTITY : 1 PLATE <br/> PRICE : Rs.100/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/book"> BOOK </Link></Button><br></br>
      
      </Card>
      <br></br>
     
      <h1> MAIN COURSE </h1>
         <br></br>
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={d} width="200" height="150"/>}<br/> DISH : BUTTER CHICKEN <br/>  QUANTITY : 1 PLATE  <br/> PRICE : Rs.100/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/book"> BOOK </Link></Button><br></br>
      
      </Card>
      
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={e} width="200" height="150"/>}<br/> DISH : CHICKEN LEMON ZEST PASTA <br/>  QUANTITY : 1 PLATE  <br/> PRICE : Rs.100/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/book"> BOOK </Link></Button><br></br>
      <br/>
      </Card>
      
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={f} width="200" height="150"/>}<br/> DISH : SALMON <br/>  QUANTITY : 1 PLATE  <br/> PRICE : Rs.100/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/book"> BOOK </Link></Button><br></br>
      
      </Card><br></br>
      
      <h1> DESSERT </h1><br></br>
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={g} width="200" height="150"/>}<br/> DISH : CHOCOLATE MOOUSE <br/>  QUANTITY : 1   <br/> PRICE : Rs.100/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/book"> BOOK </Link></Button><br></br>
      </Card>
      
      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={h} width="200" height="150"/>}<br/> DISH : CHOCO LAVA <br/>  QUANTITY : 1  <br/> PRICE : Rs.100/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/book"> BOOK </Link></Button><br></br>
      
      </Card>

      <Card sx={{ width: 400 ,height:330,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={i} width="200" height="150"/>}<br/> DISH : CHOCO PIE ICECREAM <br/>  QUANTITY : The Avenue  <br/> PRICE : Rs.100/- <br/></h5>
      <Button variant="outlined" >
            <Link to="/book"> BOOK </Link></Button><br></br>
      <br/>
      </Card>
      <br/>
      </div>
</div>
  )
}

export default Catering