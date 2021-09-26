import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import ytLogo from "../yt-logo.png";
import ytMusicLogo from "../yt-music-logo.png";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";

const Sidebar = ({ drawerWidth, handleDrawerToggle, mobileOpen }) => {
  const drawer = (
    <aside style={{ height: "100%", fontSize: "0.9em" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between", margin: "10px 30px " }}>
        <img src={ytLogo} alt="yt-logo.png" style={{ width: 60, cursor: "default" }} />
        <img src={ytMusicLogo} alt="yt-logo.png" style={{ width: 50, opacity: 0.2, cursor: "pointer" }} />
      </Toolbar>
      <Divider />
      <List
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ListItem style={{ justifyContent: "center", cursor: "default" }}>All Time</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>2018</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>2019</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>2020</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>2021</ListItem>
      </List>
      <List style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>Jan</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>Feb</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>Mar</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>Apr</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>May</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>Jun</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>Jul</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>Aug</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>Sep</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>Oct</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>Nov</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>Dec</ListItem>
      </List>
      <List style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>1</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>2</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>3</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>4</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>5</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>6</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>7</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>8</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>9</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>10</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>11</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>12</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>13</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>14</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>15</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>16</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>17</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>18</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>19</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>20</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>21</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>22</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>23</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>24</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>25</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>26</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>27</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>28</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>29</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>30</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>31</ListItem>
      </List>
      <List style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>Morning</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>Afternoon</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>Evening</ListItem>
        <ListItem style={{ justifyContent: "center", opacity: 0.2, cursor: "pointer" }}>Night</ListItem>
      </List>
    </aside>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { lg: drawerWidth },
        flexShrink: { lg: 0 },
      }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { md: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            background: "#0f2027",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            background: "#0f2027",
            borderRight: "1px solid grey",
          },
        }}
        open={true}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
