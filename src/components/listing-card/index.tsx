import {Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import {useStyles} from "./style";

interface ListingImage {
  image_url: string
}

interface Listing {
  accommodation_type: number,
  additional_info: string,
  address: string,
  start_date: string,
  end_date: string,
  images: ListingImage[],
}

interface ListingCardProps {
  listing: Listing,
}


function ListingCard(props: ListingCardProps) {
  const classes = useStyles();
  const listing = props.listing;

  return (
    <Card className={classes.card} >
      <Grid container justify="space-between">
        <Grid item>
          <CardContent>
            <Typography variant="subtitle1">
              {listing.address}
            </Typography>
            <Typography variant="subtitle2">
              Type: {listing.accommodation_type}
            </Typography>
            <Typography variant="body1">
              {listing.additional_info}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item>
          <CardMedia
            className={classes.media}
            image={listing.images[0].image_url}
            title="Get Sharked"
          />
        </Grid>
      </Grid>
    </Card>
  );
}


export default ListingCard;
