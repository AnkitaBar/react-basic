import axios from 'axios';
import React, { useEffect } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const MovieList = () => {
    const [movies, setMovies] = React.useState([]);

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
            .then((response) => {
                setMovies(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data", error);
            });
    }, []);

    return (
        <Container>
            <Grid container spacing={2}>
                {Array.isArray(movies) && movies.map((item, index) => (
                    <Grid item xs={12} md={6} sm={6} lg={3} key={index}>
                        <Card>
                            <CardMedia
                                sx={{ height: 300 }}  // Adjusted height for poster images
                                image={item.Poster}
                                title={item.Title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.Title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.Year}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default MovieList;
