// src/Home.js
import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Container, CardActionArea, CardMedia, CardActions, Button } from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import searchdata from './SearchData.json'; 
import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Home() {
  const [musicData, setMusicData] = useState([]);
  const [isPlayingArray, setIsPlayingArray] = useState(Array(searchdata.length).fill(false));

  const handleClick = (index) => {
    const updatedIsPlayingArray = [...isPlayingArray];
    updatedIsPlayingArray[index] = !updatedIsPlayingArray[index];
    setIsPlayingArray(updatedIsPlayingArray);
  };

  useEffect(() => {
    setMusicData(searchdata);
  }, []);

  return (
    <div className="home">
      <h2 style={{ textAlign: 'center' }}>
        What do you want to listen to ?
      </h2>
      <div>
        <Container maxWidth="lg">
          <Typography variant='h3' align='center' style={{ marginTop: "50px" }}>
           TRENDING MUSIC
          </Typography>
          <Grid container spacing={2}>
            {musicData.map((result, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card>
                  <CardActionArea>
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
                    <IconButton
                      onClick={() => handleClick(index)}
                      color="primary"
                    >
                      {isPlayingArray[index] ? <PauseIcon /> : <PlayArrowIcon />}
                    </IconButton>
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