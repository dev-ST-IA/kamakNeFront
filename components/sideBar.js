import { useState } from "react";
import { Box } from "@mui/system";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../store/drawerSlice";
import { drawer } from "./_drawer";

export default function SideBar({ children }) {
  const dispatch = useDispatch();
  const drawerObj = useSelector((state) => state.drawer);
  const open = drawerObj.open;
  const drawerWidth = drawerObj.drawerWidth;
  const handleCategoryClick = (id) => {};

  const handleDrawerToggle = () => {
    dispatch(setOpen());
  };

  return (
    <Box
      sx={{
        height: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "1rem",
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <nav aria-label="book categories">
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
