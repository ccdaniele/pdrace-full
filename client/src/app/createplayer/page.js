"use client"

import { AddPlayer } from '@/components/players/addPlayer'
import Container from '@mui/material/Container';


export default function createPlayer() {

    return (
      <Container maxWidth="sm" sx={{ mt: 5, mb: 4 }}>
          <AddPlayer/>
      </Container>  

    )
}