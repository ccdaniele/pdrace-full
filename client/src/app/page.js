
'use client'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { ListPlayers } from '@/components/players/listPlayers';
import { ListPods } from '@/components/pod/listPods';
import { TopPlayers } from '@/components/players/topPlayers';
import { ListEvents } from '@/components/events/listEvents';


export default function Dashboard() {

  return (

    <div> {/* CONTENT>LIST PLAYERS */}
                
      {/* CONTENT>PLAYERS LAYOUT */}
      <Container maxWidth="lg" sx={{ mt: 5, mb: 4 }}>
        <Grid container spacing={3}>

          {/* CONTENT>LIST PLAYERS */}
          <Grid item xs={6}>
            <Paper sx={{ display: 'flex', flexDirection: 'column' }}>
              <ListPlayers />
            </Paper>
          </Grid>


          {/* CONTENT>TOP PLAYERS */}
          <Grid item xs={6}>
            <Paper sx={{ display: 'flex', flexDirection: 'column' }}>
              <TopPlayers />
            </Paper>
          </Grid>

        </Grid>
      </Container>

      {/* CONTENT>PODS-EVENTS LAYOUT */}
      <Container maxWidth="lg" sx={{ mt: 5, mb: 4 }}>
        <Grid container spacing={3}>

          {/* CONTENT>LIST PODS */}
          <Grid item xs={6}>
            <Paper sx={{ display: 'flex', flexDirection: 'column' }}>
              <ListPods />
            </Paper>
          </Grid>

          {/* CONTENT>LIST EVENTS */}
          <Grid item xs={6}>
            <Paper sx={{ display: 'flex', flexDirection: 'column' }}>
              <ListEvents />
            </Paper>
          </Grid>

        </Grid>
      </Container>

    </div>
  );
}

