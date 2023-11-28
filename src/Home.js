import React, { useEffect, useState, useRef } from 'react';
import { Grid, Card, CardContent, Typography, Container, CardActionArea, CardMedia, CardActions, Button } from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import data from './Data.json'; 
import { createRoutesFromElements } from 'react-router-dom';


function Home() {
  const [musicData, setMusicData] = useState([]);
  const [isPlayingArray, setIsPlayingArray] = useState(Array(data.length).fill(false));
  const audioRef = useRef(null);

  const handleClick = (index) => {
    const updatedIsPlayingArray = [...isPlayingArray];
    updatedIsPlayingArray[index] = !updatedIsPlayingArray[index];
    setIsPlayingArray(updatedIsPlayingArray);

    if (updatedIsPlayingArray[index]) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    setMusicData(data);
  }, []);


            let current=new Date();
            let time=current.getHours();
            let currentvalue

            if((time >1)&&(time <12))
            {
              currentvalue=("Good Morning")
            }
            else 
            {
              currentvalue=("Good Afternoon")
            }
            
    

  return (
    <div className="home">
      <h1 style={{ textAlign: 'center' }}>Welcome to My Music App</h1>
      <h4 style={{ textAlign: 'center' }}>
       It is a digital music service that gives you access to millions of songs and greatest music hits.</h4>
      <h3 style={{ textAlign: 'center' }}> Explore our collection of music tracks and albums below.</h3>
      
      <div>
        <Container maxWidth="lg">
          <Typography variant='h4' align='center' style={{ marginTop: "50px" }}>
            {/* Music Cards */}

          <p><b>{currentvalue}</b></p>
           
          </Typography>
          <Grid container spacing={2}>
            {musicData.map((result, index) => (
              <Grid item xs={12} sm={4} key={index}>
                 <Card className="card-animation">
                  <CardActionArea onClick={() => handleClick(index)}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={result.img}
                      alt={result.title}
                      style={{ borderRadius: "5px" }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {result.title}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        {result.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small"><SkipPreviousIcon /></Button>
                    <Button size="small"><PauseIcon /></Button>
                    <Button size="small"><SkipNextIcon /></Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    
    </div>
  );
}

export default Home;