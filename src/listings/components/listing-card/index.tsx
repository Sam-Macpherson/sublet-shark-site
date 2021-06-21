import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import { FC } from "react";
import { ACCOMMODATION_TYPES } from "global/constants";

interface ListingCardProps {
  listing: Listing;
}


const ListingCard: FC<ListingCardProps> = ({ listing }) => {
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
          {ACCOMMODATION_TYPES[listing.accommodation_type]}
        </Typography>
      </CardContent>
    </Card>
  );
};


export default ListingCard;
