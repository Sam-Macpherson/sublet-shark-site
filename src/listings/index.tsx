/**
 * The page that shows the user all the listings; the app's homepage.
 */
import Header from "header";
import ListingCard from "listings/components/listing-card";
import { Grid, Typography } from "@material-ui/core";
import {useEffect, useState} from "react";
import React from 'react';
import API from "api";

import { useStyles } from "./style";


const ListingsPage = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    API.fetchListings().then((listings: Listing[]) => {
      setIsLoading(false);
      setListings(listings);
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
