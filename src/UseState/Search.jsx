import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";

const Search = () => {
  const [listings, setListings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Fetch the listings when the component mounts
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products"); // Replace with your Listing API
        setListings(response.data.products); // Adjust to match the API response structure
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchListings();
  }, []);

  // Function to handle the search
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${searchQuery}`
      ); // Replace with your Search API
      setSearchResults(response.data.products); // Adjust to match the API response structure
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Search
      </Typography>
      <form onSubmit={handleSearch}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={9}>
            <TextField
              label="Search for an item"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Search
            </Button>
          </Grid>
        </Grid>
      </form>

      {searchResults.length > 0 ? (
        <div>
          <Typography variant="h5" gutterBottom style={{ marginTop: "20px" }}>
            Search Results
          </Typography>
          <Grid container spacing={3}>
            {searchResults.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.thumbnail} // Assuming API returns 'thumbnail' or 'image'
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                      ${item.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <div>
          <Typography variant="h4" gutterBottom style={{ marginTop: "20px" }}>
            Listings
          </Typography>
          <Grid container spacing={3}>
            {listings.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.thumbnail} // Assuming API returns 'thumbnail' or 'image'
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                      ${item.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Search;
