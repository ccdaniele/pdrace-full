import { NextResponse } from 'next/server'


export async function POST (request){

   const newPlayer = await request.json()

   try {

      const res = await fetch(`http://localhost:3000/api/v2/users`, {
                                  method: 'POST',
                                  headers:{
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify(newPlayer)
                                  }  )       

      const data = await res.json()


      
      
      return NextResponse.json( {data} )

   }catch(error){console.log(error)}
}
