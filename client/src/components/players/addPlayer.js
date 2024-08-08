
"use client"

import {  useState, useEffect } from 'react'
import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/navigation';

export function AddPlayer() {
    const [data, setData] = useState([])
    const router = useRouter()
  
  async function postPlayer(event){
    event.preventDefault()
    
    const newPlayer = {
                name:event.target[0].value,
                pod_id:event.target[2].value
              }

    try {
       
        const res = await fetch('/api/players/players_create',{
                                  method: 'POST',
                                  headers:{
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify(newPlayer)
                                  }  
                                )

        const data = await res.json()

      } catch (error) {

        console.error(error)


      } 
    }    

  useEffect(() => { 

      fetch(`/api/pods/pods_list`)
      .then((res) => res.json())        
      .then((data) => {
      setData(data.data)
      })
  },[])
  
  
  
  return (          
      <div>
        <Paper sx={{ p: 5 }}>
          <form onSubmit={postPlayer}>
            <FormControl  >  
              <Stack justifyContent="center" direction="column">
                <TextField sx={{ mt: 5, mb: 4}} id="outlined-password-input" label="Name" type="text" autoComplete="current-password"/>
                <FormLabel  id="pod">Pod</FormLabel>
                  <RadioGroup sx={{ mt: 5, mb: 4}} aria-labelledby="demo-radio-buttons-group-label" defaultValue="agent" name="radio-buttons-group">
                    {data.map((pod) => (  
                    <FormControlLabel key={pod.id} value={pod.id} control={<Radio />} label={pod.name} />
                  ))}</RadioGroup>
                <Button type="submit" onClick={()=>router.push('/')}>Create player</Button>
              </Stack> 
            </FormControl> 
          </form>        
          </Paper>
        
      </div>
              
    
  );
}



