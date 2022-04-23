import { Typography } from "@mui/material";
import { Link } from "@mui/material";

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link href={"/"}>
        {/* <Link color="inherit" href="https://mui.com/"> */}
        <a>KamakNe</a>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
