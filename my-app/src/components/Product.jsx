import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Product() {
return(<Card
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <CardMedia
      component="img"
      sx={{
        // 16:9
        pt: "0%",
      }}
      image=""
      alt="random"
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="h2">
        Heading
      </Typography>
      <Typography>
        This is a media card. You can use this section to describe
        the content.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">View</Button>
      <Button size="small">Edit</Button>
    </CardActions>
  </Card>)
}