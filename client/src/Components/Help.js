import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment } from "semantic-ui-react";

function Help() {
      
    const steps = [

        {
    
          id: "Greet",
    
          message: "Hello, Welcome to our website",
    
          trigger: "Ask Name",
    
        },
    
        {
    
          id: "Ask Name",
    
          message: "Please enter your name!",
    
          trigger: "waiting1",
    
        },
    
        {
    
          id: "waiting1",
    
          user: true,
    
          trigger: "Name",
    
        },
    
        {
    
          id: "Name",
    
          message: "Hi {previousValue}, Please select your issue",
    
          trigger: "issues",
    
        },
    
        {
    
          id: "issues",
    
          options: [
    
            {
    
              value: "Payment",
    
              label: "Payment",
    
              trigger: "Payment",
    
            },
    
            { value: "Booking", label: "Booking", trigger: "Booking" },
    
          ],
    
        },
    
        {
    
          id: "Payment",
    
          message:
    
            "Thanks for letting your Payment issue, Our team will resolve your issue ASAP",
    
          end: true,
    
        },
    
        {
    
          id: "Booking",
    
          message:
    
            "Thanks for letting your Booking issue, Our team will resolve your issue ASAP",
    
          end: true,
    
        },
    
      ];       

  return (
    <div>

        <Segment floated="right">
            <ChatBot steps={steps}/>
            </Segment> 


    </div>
  );
}

export default Help