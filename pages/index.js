import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { CircularProgress } from "@mui/material";
import Layout from "../components/_layout";
import _posts from "../components/posts/_posts";

function Home() {
  return (
    <Box>
      <_posts />
    </Box>
  );
}

Home.layout = Layout;

export default Home;
