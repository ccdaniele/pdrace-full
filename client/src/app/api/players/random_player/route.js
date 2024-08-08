

import { NextResponse } from 'next/server'


export async function GET (){

   try {

    const res = await fetch(`http://${process.env.SERVER_HOST}/api/v2/user/random`)       

    const data = await res.json()

    
    return NextResponse.json({ data })

   }catch(error){console.log(error)}
}
