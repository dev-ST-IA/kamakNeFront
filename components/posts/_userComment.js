import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function _userComment({
  _id,
  comment,
  createdAt,
  post,
  ...props
}) {
  const date = new Date(createdAt) || new Date();
  return (
    <Box
      sx={{
        maxWidth: 1,
        display: "flex",
        flexDirection: "column",
        margin: 2,
      }}
    >
      <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
        User Name(N/a)
      </Typography>
      <Typography sx={{ fontSize: 12 }} variant="body1" component="div">
        {comment}
      </Typography>
      <Typography sx={{ fontSize: 8 }} color="text.secondary">
        {date.toLocaleString()}
      </Typography>
    </Box>
  );
}
