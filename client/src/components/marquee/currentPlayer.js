
import { RandomPlayer } from '../players/randomPlayer';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Marquee from "react-fast-marquee";
import Paper from '@mui/material/Paper'




export function CurrentPlayer(){

  return(

    <div>
      <Card sx={{ display: 'flex', alignItems: 'center' }} >
          <CardContent sx={{ flex: '1 0 auto' }} >
            <Box sx={{ flexGrow: 1,  }}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                  {/* <Item> */}
                    <Typography component="div" variant="h5" >
                      Active players
                    </Typography>
                  {/* </Item> */}
              </Grid>
              <Grid item xs={10}>
                {/* <Item> */}
                  <Paper >
                    <Typography component="div" variant="h6" >
                  <Marquee >
                    <RandomPlayer/>
                  </Marquee>
                    </Typography>
                  </Paper>
                {/* </Item> */}
              </Grid>
            </Grid> 
            </Box>
          </CardContent>
      </Card>
    </div>

  )
}