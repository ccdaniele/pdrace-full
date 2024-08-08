"use client"
import {  useState, useEffect } from 'react'
import * as React from 'react';


// Connect to RandomUsers endpoint to gather display a Racer in the marquee

export function RandomPlayer(){
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [check, setCheck] = useState(0)

  
  useEffect(() => {  
    const fetchMessage = async () => {

      try {
        const response = await fetch('/api/players/latest-message');
        const result = await response.json();
        console.log(result)
        console.log("loading?", isLoading)
        setData(result.message.body);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching message:', error);
      }



  }
    const id = setInterval(() => {
                fetchMessage();      
                setCheck(check + 1)
                }, 3000);
    return () => clearInterval(id);            
  },[check])   

  
    return (
    <div>
      <div>{isLoading? 
        
        <h1>loading</h1>

        : 

        <div className= "columns-1" >
          <h2 className="" >{data.user_name} with {data.event_name} </h2>

        </div> 

      }</div>
    </div>
       

    )
}
