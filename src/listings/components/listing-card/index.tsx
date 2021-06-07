import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import {useStyles} from "./style";

interface ListingCardProps {
  listing: Listing,
}


const ListingCard = ({ listing }: ListingCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} >
      <CardMedia
        className={classes.cardMedia}
        image={listing.images[0].image_url}
        title="Get Sharked"
      />
      <CardContent className={classes.cardContent}>
        <Typography noWrap variant="subtitle1">{listing.address}</Typography>
        <Typography variant="subtitle2">
          {listing.accommodation_type}
        </Typography>
      </CardContent>
    </Card>
  );
};


export default ListingCard;
