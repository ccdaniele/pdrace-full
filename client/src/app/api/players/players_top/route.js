
import { NextResponse } from 'next/server'


export async function GET (){

   try {

    const res = await fetch(`http://localhost:3000/api/v2/user/top`)       

    const data = await res.json()

    
    return NextResponse.json({ data })

   }catch(error){console.log(error)}
}