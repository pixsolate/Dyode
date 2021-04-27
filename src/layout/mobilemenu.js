import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  LeftMenuLinks,
  RightFirstMenuLinks,
  RightSecondMenuLinks,
} from "../router";
import { setShowMenu } from "../actions/layout";
import Social1 from "../assets/images/social1.png";

const drawerWidth = 325;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: 0,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  linkText: {
    textDecoration: `none`,
    fontFamily: "Lato",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "normal",
    color: `black`,
  },
  icon: {
    width: 35,
    height: 35,
  },
  title: {
    paddingLeft: 15,
    fontSize: 14,
  },
}));

const MobileMenu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.layoutInfo.menuShow);
  const [showSubTopMenu, setShowSubTopMenu] = useState(false);
  const [showSubBottomMenu, setShowSubBottomMenu] = useState(false);

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <Divider />
      <Box ml={32}>
        <IconButton onClick={() => dispatch(setShowMenu(false))}>
          <HighlightOffIcon className={classes.icon} />
        </IconButton>
      </Box>
      <Box p={4} pt={2} pb={0}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography className={classes.title}>TOPS</Typography>
          <IconButton onClick={() => setShowSubTopMenu(!showSubTopMenu)}>
            {showSubTopMenu ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </IconButton>
        </Box>
        {showSubTopMenu && (
          <List>
            {RightFirstMenuLinks.map(({ title, path }) => (
              <Link key={title} className={classes.linkText} to={path}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            ))}
          </List>
        )}
      </Box>
      <Divider />
      <Box p={4} pt={2}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography className={classes.title}>BOTTOMS</Typography>
          <IconButton onClick={() => setShowSubBottomMenu(!showSubBottomMenu)}>
            {showSubBottomMenu ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </IconButton>
        </Box>
        {showSubBottomMenu && (
          <List>
            {RightSecondMenuLinks.map(({ title, path }) => (
              <Link key={title} className={classes.linkText} to={path}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            ))}
          </List>
        )}
      </Box>
      <Box
        position="absolute"
        display="flex"
        justifyContent="space-between"
        p={2}
        bgcolor="#EFEFEF"
        bottom="0px"
      >
        <Box width="60%" mt={2}>
          <img src={Social1} width="100%" alt="/" />
        </Box>
        <Box width="40%">
          <List component="nav" aria-labelledby="main navigation">
            {LeftMenuLinks.map(({ title, path }) => (
              <Link key={title} className={classes.linkText} to={path}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileMenu;
