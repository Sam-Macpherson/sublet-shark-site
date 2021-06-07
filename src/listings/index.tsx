/**
 * The page that shows the user all the listings; the app's homepage.
 */
import Header from "header";
import ListingCard from "listings/components/listing-card";
import { Grid, Typography } from "@material-ui/core";
import {useEffect, useState} from "react";
import React from 'react';
import api from "global/axios.config";

import { useStyles } from "./style";


function ListingsPage() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true)
  const [listings, setListings] = useState([]);

  useEffect(() => {
    api.get(
      '/listings/listings/'
    ).then(response => {
      setIsLoading(false);
      setListings(response.data);
    }).catch(errors => {
      console.log(errors);
    })
  }, []);

  return (
    <div className={classes.fullWidth}>
      {isLoading ? (<Typography variant="body1">Loading...</Typography>) : (
        <React.Fragment>
          <Header />
          <Grid container direction="column" justify="flex-start" className={classes.listingsContainerGrid}>
            {listings.map(listing => (
              <Grid item xs={12}>
                <ListingCard listing={listing}/>
              </Grid>
            ))}
          </Grid>
        </React.Fragment>)}
    </div>
  );
}


export default ListingsPage;
