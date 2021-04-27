import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  IconButton,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { Search, ShoppingCart } from "@material-ui/icons";
import { NavLinks } from "../router";
import DeskTopMenu from "./dekmenu";
import Logo from "../assets/images/logo.png";
import mobileLogo from "../assets/images/mobileLogo.png";
import accountIcon from "../assets/icons/account.png";
import menuIcon from "../assets/icons/menu.png";
import { setShowMenu } from "../actions/layout";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#10504F",
  },
  topNav: {
    width: "100%",
    height: "60px",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: `center`,
  },
  navWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: `space-between`,
    alignItems: "center",
    padding: 50,
    paddingBottom: 10,
  },
  navMobileWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: `space-between`,
    alignItems: "center",
    padding: 10,
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    fontFamily: "Lato",
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: "0.1em",
    color: `white`,
    "&&:hover": {
      textDecoration: "underline",
    },
  },
  title: {
    fontSize: 14,
  },
  icon: {
    color: "white",
  },
  menuIcon: {
    color: "white",
  },
  middleSearchbox:{
    position:"absolute",
    marginTop:"-65px",
    marginLeft:"-220px",
    height:50,
  },
  searchFiled: {
    backgroundColor: "white",
    height: 35,
    width: 290,
  },
  searchButton: {
    backgroundColor: "black !important",
    color: "white",
  },
});

const TobBar = ({ location, width }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showSearchBtn, setShowSearchBtn] = useState(false);
  const showMenuAble = useSelector((state) => state.layoutInfo.menuShow);

  return (
    <Box position="relative">
      <AppBar position="static" className={classes.appBar}>
        <Box className={classes.topNav}>
          <Typography className={classes.title}>
            FREE SHIPPING ON ALL ORDERS OVER $75
          </Typography>
        </Box>
        {width > 600 ? (
          <Box className={classes.navWrapper}>
            <img src={Logo} alt="/" />
            <Toolbar>
              <Container className={classes.navbarDisplayFlex}>
                <List
                  component="nav"
                  aria-labelledby="main navigation"
                  className={classes.navDisplayFlex}
                >
                  {NavLinks.map(({ title, path }) => (
                    <Link
                      key={title}
                      className={classes.linkText}
                      to={path}
                      onMouseOver={() => dispatch(setShowMenu(true))}
                    >
                      <ListItem button>
                        <ListItemText primary={title} />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Container>
            </Toolbar>
            <Box display="flex">
              {showSearchBtn && (
                <Box
                  display="flex"
                  alignItems="center"
                  className={width > 768 ? "" : classes.middleSearchbox}
                >
                  <TextField
                    variant="outlined"
                    className={classes.searchFiled}
                    placeholder="What are you searching for?"
                    InputProps={{ style: { height: 35 } }}
                  />
                  <Button className={classes.searchButton}>Go</Button>
                </Box>
              )}
              {!showSearchBtn && (
                <IconButton onClick={() => setShowSearchBtn(!showSearchBtn)}>
                  <Search className={classes.icon} />
                </IconButton>
              )}
              <IconButton>
                <img src={accountIcon} className={classes.icon} alt="/" />
              </IconButton>
              <IconButton>
                <ShoppingCart className={classes.icon} />
              </IconButton>
            </Box>
          </Box>
        ) : (
          <Box className={classes.navMobileWrapper}>
            <Box display="flex">
              <IconButton onClick={() => dispatch(setShowMenu(true))}>
                <img src={menuIcon} alt="/" className={classes.menuIcon} />
              </IconButton>
              <Box m={1}></Box>
              <img src={mobileLogo} alt="/" />
            </Box>
            <Box>
              <IconButton onClick={() => setShowSearchBtn(!showSearchBtn)}>
                <Search className={classes.icon} />
              </IconButton>
              <IconButton>
                <img src={accountIcon} className={classes.icon} alt="/" />
              </IconButton>
              <IconButton>
                <ShoppingCart className={classes.icon} />
              </IconButton>
            </Box>
          </Box>
        )}
      </AppBar>
      {showSearchBtn && width < 600 && (
        <Box
          display="flex"
          alignItems="center"
          position="absolute"
          justifyContent="center"
          zIndex="9999"
          bgcolor="white"
          left="50%"
          p={1}
          style={{ transform: "translateX(-50%)" }}
        >
          <TextField
            variant="outlined"
            className={classes.searchFiled}
            placeholder="What are you searching for?"
            InputProps={{ style: { height: 35 } }}
          />
          <Button className={classes.searchButton}>Go</Button>
        </Box>
      )}
      {showMenuAble && (
        <DeskTopMenu location={location.pathname} width={width} />
      )}
    </Box>
  );
};

export default TobBar;
