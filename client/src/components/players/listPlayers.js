"use client"
import * as React from 'react';
import {  useState, useEffect } from 'react'
import { Title } from '@/lib/title';



export function ListPlayers(){
  const [data, setData] = useState([])
  
  useEffect(() => { 

      fetch(`/api/players/players_list`)
        .then((res) => res.json())
        .then((data) => {
        setData(data.data)
        })
  

   },[])

    return (

    <div>
      <Title>Players: All</Title>
        <div className="overflow-x-auto">
          <table className="table table-zebra ">
            {/* head */}
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Pod</th>
                <th>points</th>
              </tr>
            </thead>
              <>{data.map((player) => (
                <tbody key={player.id} >
                  {/* row 1 */}
                  <tr className='m-6'>
                     <td>{player.id}</td>
                    <td>{player.name}</td>
                    <td>{player.pod.name}</td>
                    <td>{player.points}</td>
                  </tr>
                </tbody>
              ))}</>
          </table>
        </div>
    </div>
      
      
      
      
      
      
      
      

                
    )
}