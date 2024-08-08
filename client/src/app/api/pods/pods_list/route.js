
import { NextResponse } from 'next/server'


export async function GET (){

   function score(pod) {

      const usersScores = pod.users.map((user)=>user.points)
      const podScore = usersScores.reduce(function (x, y) {
      return x + y;
      }, 0);
      

      const updatedPodScore = pod.points = podScore
   // console.log("pod:", pod,"podScore", podScore, "updatedPodScore:",updatedPodScore)
      return pod
  }

   try{
      const res = await fetch(`http://localhost:3000/api/v2/pods`)       

      const pods = await res.json()

      const data = await pods.map((pod)=> score(pod))

      return NextResponse.json({ data })

   }catch(error){console.log(error)}
}