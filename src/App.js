import React, { Component } from "react";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

class App extends Component {
  state = {
    page: 1
  };
  drawerWidth = 240;
  root = {
    display: "flex"
  };
  drawer = {
    width: this.drawerWidth,
    flexShrink: 0
  };
  appBar = {
    marginLeft: this.drawerWidth
  };
  menuButton = {
    marginRight: 20
  };

  drawerPaper = {
    width: this.drawerWidth
  };
  content = {
    flexGrow: 1,
    padding: 30
  };

  mobileOpen = false;
  setMobileOpen = false;

  change = index => {
    this.setState({ page: index });
  };
  drawer = (
    <div>
      <div style={this.toolbar} />
      <Divider />
      <List>
        {["Comp1", "Comp2", "Comp3", "Comp4"].map((text, index) => (
          <ListItem button key={text} onClick={() => this.change(index)}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  render() {
    return (
      <React.Fragment>
        <div style={this.root}>
          <CssBaseline />
          <AppBar position="fixed" style={this.appBar}>
            <Toolbar style={{ marginLeft: 200 }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={this.handleDrawerToggle}
                style={this.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Responsive drawer
              </Typography>
            </Toolbar>
          </AppBar>
          <nav aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                variant="temporary"
                onClose={this.handleDrawerToggle}
                this={{
                  paper: this.drawerPaper
                }}
                ModalProps={{
                  keepMounted: true // Better open performance on mobile.
                }}
              >
                {this.drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                this={{
                  paper: this.drawerPaper
                }}
                variant="permanent"
                open
              >
                {this.drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main style={{ marginLeft: 200, marginTop: 100 }}>
            <div />
            {this.state.page === 0 ? (
              <Comp1 />
            ) : this.state.page === 1 ? (
              <Comp2 />
            ) : this.state.page === 2 ? (
              <Comp3 />
            ) : (
              <Comp4 />
            )}
          </main>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
