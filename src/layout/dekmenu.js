import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  LeftMenuLinks,
  RightFirstMenuLinks,
  RightSecondMenuLinks,
} from "../router";
import Social1 from "../assets/images/social1.png";
import { setShowMenu } from "../actions/layout";

const useStyles = makeStyles({
  paper: {
    display: "flex",
    width: "50%",
  },
  leftCard: {
    width: "60%",
    display: "flex",
    backgroundColor: "#EFEFEF",
  },
  rightCard: {
    width: "40%",
    display: "flex",
  },
  middleCard:{
    width:"100%",
    display:"flex"
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    fontFamily: "Lato",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "normal",
    color: `black`,
  },
  title: {
    padding: 15,
    fontSize: 14,
  },
});

const DeskTopMenu = ({ location, width }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Box
      display="flex"
      justifyContent="center"
      position="absolute"
      zIndex="9999"
      width="100%"
    >
      <Paper
        className={classes.paper}
        onMouseLeave={() => dispatch(setShowMenu(false))}
      >
        {width > 768 && (
          <Box className={classes.leftCard}>
            <Box p={4}>
              <img src={Social1} alt="/" />
            </Box>
            <Box p={4}>
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
        )}
        <Box className={width > 768 ? classes.rightCard : classes.middleCard}>
          <Box p={4}>
            <Typography className={classes.title}>TOPS</Typography>
            <List component="nav" aria-labelledby="main navigation">
              {RightFirstMenuLinks.map(({ title, path }) => (
                <Link key={title} className={classes.linkText} to={path}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
          <Box p={4}>
            <Typography className={classes.title}>BOTTOMS</Typography>
            <List component="nav" aria-labelledby="main navigation">
              {RightSecondMenuLinks.map(({ title, path }) => (
                <Link key={title} className={classes.linkText} to={path}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default DeskTopMenu;
