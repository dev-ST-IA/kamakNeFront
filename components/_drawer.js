import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Link from "next/link";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import PersonIcon from "@mui/icons-material/Person";
import { Box } from "@mui/system";

export const drawer = (
  <div>
    <List>
      <ListItem>
        <Link href="/">
          <Button variant="text" color="inherit">
            <Typography variant="h6" color="inherit" noWrap>
              Kamak-Ne
            </Typography>
          </Button>
        </Link>
      </ListItem>
    </List>
    {/* <Toolbar /> */}
    <Divider />
    <Box sx={{ width: 1, margin: "auto" }}>
      <List
        sx={{
          margin: "auto",
          width: 70,
        }}
      >
        <ListItem button sx={{ borderRadius: "50%" }} key={"addPost"}>
          <ListItemIcon>
            <AddPhotoAlternateIcon fontSize="large" />
          </ListItemIcon>
        </ListItem>
        <ListItem button sx={{ borderRadius: "50%" }} key={"homeIcon"}>
          <ListItemIcon>
            <HomeIcon fontSize="large" />
          </ListItemIcon>
        </ListItem>

        <ListItem button sx={{ borderRadius: "50%" }} key={"userIcon"}>
          <ListItemIcon>
            <PersonIcon fontSize="large" />
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>
    <Divider />
  </div>
);
