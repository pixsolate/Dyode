import React from "react";
import {
  Box,
  Button,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import MailImg from "../../assets/icons/mail.png";

const useStyles = makeStyles((theme) => ({
  contactWarapp: {
    backgroundColor: "#10504F",
    padding: 100,
  },
  contactMobileWarapp: {
    backgroundColor: "#10504F",
    padding: 10,
  },
  title: {
    fontFamily: "Pacifico",
    fontSize: 40,
    color: "white",
  },
  mobileTitle: {
    fontFamily: "Pacifico",
    fontSize: 20,
    color: "white",
  },
  contentTitle: {
    fontFamily: "Lato",
    fontSize: 20,
    color: "white",
  },
  contentMobileTitle: {
    fontFamily: "Lato",
    fontSize: 14,
    color: "white",
    textAlign: "center",
    padding: 10,
  },
  textField: {
    border: "1px solid white",
    backgroundColor: "white",
    width: 400,
  },
  button: {
    backgroundColor: "#10504F !important",
    border: "1px solid white",
    height: 60,
    color: "white",
  },
  mobileButton: {
    backgroundColor: "#10504F !important",
    border: "1px solid white",
    height: 40,
    color: "white",
    margin: 10,
  },
}));

const Contact = ({ width }) => {
  const classes = useStyles();
  return (
    <>
      {width > 600 ? (
        <Box className={classes.contactWarapp}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <IconButton>
              <img src={MailImg} alt="/" />
            </IconButton>
            <Typography className={classes.title}>
              Sign Up & Stay Connected
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            flexDirection={width > 768 ? "row" : "column"}
            alignItems="center"
            pt={5}
          >
            <Box display="flex" textAlign={width > 768 ? "left" : "center"}>
              {width > 768 ? (
                <Typography className={classes.contentTitle}>
                  Sign up for the newsletter and get 20% off! Gain access to
                  exclusive
                  <br />
                  offers and be the first to know when new stuff drops!
                </Typography>
              ) : (
                <Typography className={classes.contentTitle}>
                  Sign up for the newsletter and get 20% off! Gain access to
                  exclusive offers and be the first to know when new stuff
                  drops!
                </Typography>
              )}
            </Box>
            <Box display="flex" m={width > 768 ? 0 : 3}>
              <TextField
                variant="outlined"
                placeholder="Enter Your Email Address"
                className={classes.textField}
              />
              <Box m={1}></Box>
              <Button className={classes.button}>Subscribe</Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box className={classes.contactMobileWarapp}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <IconButton>
              <img src={MailImg} alt="/" />
            </IconButton>
            <Typography className={classes.mobileTitle}>
              Sign Up & Stay Connected
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Typography className={classes.contentMobileTitle}>
              Sign up for the newsletter and get 20% off! Gain access to
              exclusive offers and be the first to know when new stuff drops!
            </Typography>
            <Button className={classes.mobileButton}>Subscribe</Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Contact;
