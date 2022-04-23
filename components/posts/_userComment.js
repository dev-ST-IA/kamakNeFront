import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function _userComment() {
  return (
    <Box
      sx={{ minWidth: 1, display: "flex", flexDirection: "column", margin: 2 }}
    >
      <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography sx={{ fontSize: 12 }} variant="body1" component="div">
        belent
      </Typography>
      <Typography sx={{ fontSize: 8 }} color="text.secondary">
        adjective
      </Typography>
    </Box>
  );
}
