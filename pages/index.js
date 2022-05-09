import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { CircularProgress } from "@mui/material";
import Layout from "../components/_layout";
import _posts from "../components/posts/_posts";
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Home() {
  const auth = useAuth();
  const router = useRouter();
  useEffect(() => {
    const isUserLogged = auth?.isUserLogged;
    if (isUserLogged) {
      router.push("/auth/login");
    }
  }, []);
  return (
    <Box>
      <_posts />
    </Box>
  );
}

Home.layout = Layout;

export default Home;
