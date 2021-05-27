/**
 * The page that shows the user all the listings; the app's homepage.
 */
import {Header, ListingCard} from "../../components";
import { useStyles } from "./style";
import { Grid } from "@material-ui/core";
import {useEffect, useState} from "react";
import React from 'react';
import api from "../../global/axios.config";

function ListingsPage() {
  const classes = useStyles();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    api.get(
      '/listings/listings/'
    ).then(response => {
      setListings(response.data);
    }).catch(errors => {
      console.log(errors);
    })
  }, []);

  return (
    <div className={classes.fullWidth}>
      <Header />
      <Grid container direction="column" justify="flex-start" className={classes.listingsContainerGrid}>
        {listings.map(listing => (
          <Grid item xs={12}>
            <ListingCard listing={listing}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}


export default ListingsPage;
