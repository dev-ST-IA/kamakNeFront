import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

export default function _userComment({
  _id,
  comment,
  createdAt,
  post,
  severity,
  ...props
}) {
  const filteredSeverity = Object.keys(severity)
    .reduce((arr, item, i, array) => {
      if (severity[item] > 70) {
        const filteredKey = item
          .replace(/[^a-zA-Z ]/g, " ")
          .split(" ")
          .map((item) => item[0].toUpperCase() + item.substring(1))
          .join(" ")
          .trim();
        const val = `${filteredKey}: ${severity[item]}%`;
        arr.push(val);
        return arr;
      }
      return arr;
    }, [])
    .join("\n");
  const date = new Date(createdAt) || new Date();
  return (
    <Tooltip
      title={<div style={{ whiteSpace: "pre-line" }}>{filteredSeverity}</div>}
    >
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
    </Tooltip>
  );
}
