import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import { FooterNavLeftLinks, FooterNavRightLinks } from "../router";

const useStyles = makeStyles({
  footerWrapper: {
    display: "flex",
    backgroundColor: "black",
    color: "white",
    padding: 30,
  },
  footerMobileWrapper: {
    display: "flex",
    backgroundColor: "black",
    color: "white",
  },
  title: {
    paddingLeft: 15,
    fontFamily: "Pacifico",
    fontSize: 22,
  },
  linkText: {
    textDecoration: `none`,
    fontFamily: "Lato",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    color: `white`,
  },
  icon: {
    color: "white",
  },
});

const Footer = ({ width }) => {
  const classes = useStyles();
  const [showService, setShowService] = useState(false);
  const [showCompany, setShowCompany] = useState(false);

  useEffect(() => {
    if (width > 600) {
      setShowService(true);
      setShowCompany(true);
    }
  }, [width]);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      bgcolor="black"
      color="white"
      flexDirection={width > 600 ? "row" : "column"}
    >
      <Box
        className={
          width > 600 ? classes.footerWrapper : classes.footerMobileWrapper
        }
        flexDirection={width > 600 ? "row" : "column"}
      >
        {" "}
        <Box className={classes.leftCard}>
          <Box p={2}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography className={classes.title}>
                Customer Service
              </Typography>
              {width < 600 && (
                <IconButton onClick={() => setShowService(!showService)}>
                  {showService ? (
                    <AddIcon className={classes.icon} />
                  ) : (
                    <RemoveIcon className={classes.icon} />
                  )}
                </IconButton>
              )}
            </Box>
            {showService && (
              <List component="nav" aria-labelledby="main navigation">
                {FooterNavLeftLinks.map(({ title, path }) => (
                  <Link key={title} className={classes.linkText} to={path}>
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            )}
          </Box>
        </Box>
        <Box className={classes.rightCard}>
          <Box p={2}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography className={classes.title}>Company</Typography>
              {width < 600 && (
                <IconButton onClick={() => setShowCompany(!showCompany)}>
                  {showCompany ? (
                    <AddIcon className={classes.icon} />
                  ) : (
                    <RemoveIcon className={classes.icon} />
                  )}
                </IconButton>
              )}
            </Box>
            {showCompany && (
              <List component="nav" aria-labelledby="main navigation">
                {FooterNavRightLinks.map(({ title, path }) => (
                  <Link key={title} className={classes.linkText} to={path}>
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            )}
          </Box>
        </Box>
      </Box>
      <Box p={width > 600 ? 6 : 2}>
        <Typography className={classes.title}>Follow Us</Typography>
        <Box display="flex">
          <IconButton>
            <FacebookIcon className={classes.icon} />
          </IconButton>
          <IconButton>
            <InstagramIcon className={classes.icon} />
          </IconButton>
          <IconButton>
            <TwitterIcon className={classes.icon} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
