import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid2 } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ParamsProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const getProducts = async () => {
            try{
               let res = await axios.get('https://dummyjson.com/products')
               setProducts(res.data.products);
            //    console.log(res.data.products);
            } catch(error){
                console.log(error);
            }
        }
        getProducts();
    },[])
  return (
    <>
    
        <Container >
            <Grid2 container spacing={3}>
                    {Array.isArray(products) && products?.map((item, index) => {
                        return (
                            <Grid2 item xs={12} md={6} sm={6} lg={3} width='50%'>
                                <Card key={index}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={item.images ? item.images[0] : 'no images found'}
                                        title={item.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {item.price}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link to={`/products/${item.id}`}>See details</Link>
                                        { <Button size="small">Learn More</Button> }
                                    </CardActions>
                                </Card>
                            </Grid2>
                        )
                    })}
            </Grid2>
        </Container>
    
    </>
  )
}

export default ParamsProducts