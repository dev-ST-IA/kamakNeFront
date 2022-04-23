import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DrawerItem from "./_drawerItem";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { Box } from "@mui/system";

export const mainListItems = (
  <>
    <DrawerItem
      text={"Dashboard"}
      icon={<DashboardIcon />}
      navigateTo="/dashboard"
    />
    <DrawerItem text={"Books"} icon={<MenuBookIcon />} navigateTo="/books" />
    <DrawerItem
      text={"Orders"}
      icon={<ShoppingCartIcon />}
      navigateTo="/orders"
    />
    <DrawerItem
      text={"Customers"}
      icon={<PeopleIcon />}
      navigateTo="/customers"
    />
    <DrawerItem text={"Sales"} icon={<ReceiptIcon />} navigateTo="/sales" />
  </>
);

export const secondaryListItems = (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignContent: "flex-start",
    }}
  >
    <DrawerItem text={"Users"} icon={<PeopleAltIcon />} navigateTo="/users" />
    <DrawerItem
      text={"Settings"}
      icon={<SettingsIcon />}
      navigateTo="/settings"
    />
  </Box>
);
