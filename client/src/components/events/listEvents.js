"use client"
import * as React from 'react';
import {  useState, useEffect } from 'react'
import { Title } from '@/lib/title';


export function ListEvents(){
  const [data, setData] = useState([])
  
  useEffect(() => { 

      fetch(`/api/events/events_list`)
        .then((res) => res.json())
        .then((data) => {
        setData(data.data)
        })
  

   },[])

    return (

    <div>
      <Title>Events </Title>
        <div className="overflow-x-auto">
          <table className="table table-zebra ">
            {/* head */}
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
              <>{data.map((event) => (
                <tbody key={event.id} >
                  {/* row 1 */}
                  <tr className='m-6'>
                    <td>{event.id}</td>
                    <td> A {event.name} request</td>
                    <td>{event.points}</td>
                  </tr>
                </tbody>
              ))}</>
          </table>
        </div>
    </div>
      
      
      
      
      
      
      
      

                
    )
}