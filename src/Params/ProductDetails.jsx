import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography, Container, Card, CardContent } from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(
    () => {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(
            `https://dummyjson.com/products/${id}`
          );
          setProduct(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchProduct();
    },
    [id]
  );

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1">
            {product.description}
          </Typography>
          <Typography variant="h6">
            Price: ${product.price}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetails;
