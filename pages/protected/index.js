import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { CircularProgress } from "@mui/material";
import Layout from "../../components/_layout";

function Home() {
  return (
    <Box
      sx={{
        width: 1,
        margin: "auto",
      }}
    >
      <Grid container columnGap={0} columnSpacing={0}>
        <Grid item xs={10}>
          <Box
            sx={{
              width: 1,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}

Home.layout = Layout;

export default Home;
