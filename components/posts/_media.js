import { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import _comment from "./_comment";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMore from "./_expandMoreBase";
import CommentIcon from "@mui/icons-material/Comment";

export default function _media({
  userName,
  caption,
  mediaType,
  mediaUrl,
  likes,
  createdAt,
  ...props
}) {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 600, minWidth: 600 }}>
      <CardHeader
        avatar={
          userName && (
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {userName ? userName[0].toUpperCase() : null}
            </Avatar>
          )
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={userName}
        subheader={createdAt}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {caption}
        </Typography>
      </CardContent>
      {mediaUrl != null && (
        <CardMedia
          component={
            mediaType === "image"
              ? "img"
              : mediaType === "video"
              ? "video"
              : null
          }
          height={350}
          image={mediaUrl}
          alt={`media - ${caption}`}
        />
      )}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {!expanded && <CommentIcon />}
          {expanded && <ExpandMoreIcon />}
        </ExpandMore>
      </CardActions>
      <_comment expanded={expanded} Id={props._id} />
    </Card>
  );
}
