import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import $ from "jquery";

const HistoryCard = (props) => {
  const { id, name, food_img, desc } = props;
  console.log(food_img);
  return (
    <Card
      sx={{ maxWidth: 300, maxHeight: 300 }}
      className="historyCard"
      id={id}
    >
      <CardMedia component="img" height="140" image={food_img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
export default HistoryCard;
