/**
 * The page that shows the user all the listings; the app's homepage.
 */
import Header from "header";
import ListingCard from "listings/components/listing-card";
import { Grid, Typography } from "@material-ui/core";
import {useEffect, useState} from "react";
import React from 'react';
import API from "api";
import _ from "lodash";

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
    <div className={classes.background}>
      <Header />
      {isLoading ? (<Typography variant="body1">Loading...</Typography>) : (
          <Grid container spacing={4} className={classes.listingsContainerGrid}>
            {_.map(listings, listing => (
              <Grid key={listing.id} item xs={12} sm={6} md={4} lg={3}>
                <ListingCard listing={listing}/>
              </Grid>
            ))}
          </Grid>)}
    </div>
  );
}


export default ListingsPage;
