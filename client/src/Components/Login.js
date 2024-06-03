import React,{useState} from 'react' 
import TextField from '@mui/material/TextField';
import a from './images/b.jpg';
import { Avatar, Button, Card, Checkbox, Link,FormControlLabel } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
function Login() {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <>
  
  {isAuthenticated && (
            <li>
              <p> {user.name} </p>
            </li>
          )}

          {isAuthenticated ? (
            <li>
              <Button
                onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </Button>
            </li>
          ) : (
            <li>
              <Button onClick={() => loginWithRedirect()}>Log In</Button>
            </li>
          )}
          
    </>
  )
}

export default Login
