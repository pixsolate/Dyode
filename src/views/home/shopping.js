import React from "react";
import { Box, Typography, Button, makeStyles } from "@material-ui/core";
import HeroImg from "../../assets/images/hero.png";
import Social1 from "../../assets/images/social1.png";
import Social2 from "../../assets/images/social2.png";
import Social3 from "../../assets/images/social3.png";
import Social4 from "../../assets/images/social4.png";
import Social5 from "../../assets/images/social5.png";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
    objectFit: "cover",
  },
  textWrapper: {
    top: "10%",
    left: "60%",
    // transform:"-"
  },
  mobileTextWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#EFEFEF",
    padding: 30,
  },
  title: {
    fontFamily: "Pacifico",
    fontSize: 60,
    color: "white",
  },
  middleTitle: {
    fontFamily: "Pacifico",
    fontSize: 35,
    color: "white",
  },
  subtitle: {
    fontFamily: "Lato",
    fontSize: 26,
    color: "white",
    marginTop: 15,
  },
  button: {
    backgroundColor: "#10504F !important",
    color: "white",
    marginTop: 25,
    width: 150,
    height: 40,
    padding: 3,
  },
  mobileButton: {
    backgroundColor: "black !important",
    color: "white",
    marginTop: 25,
    width: 150,
    height: 40,
    padding: 3,
  },
  mobileTitle: {
    fontFamily: "Pacifico",
    fontSize: 30,
    color: "#10504F",
  },
  mobileSubtitle: {
    fontFamily: "Lato",
    fontSize: 16,
    color: "#10504F",
    marginTop: 15,
  },
  topTitle: {
    fontFamily: "Pacifico",
    fontSize: 60,
    color: "black",
  },
  mobilTopTitle: {
    fontFamily: "Pacifico",
    fontSize: 26,
    color: "black",
  },
  socialImg: {
    width: "18%",
    padding: 2,
  },
  socialMobileImg: {
    width: "30%",
  },
}));

const Shopping = ({ width }) => {
  const classes = useStyles();
  return (
    <>
      {width > 600 ? (
        <>
          <Box position="relative">
            <img src={HeroImg} alt="/" className={classes.img} />
            <Box position="absolute" className={classes.textWrapper}>
              {" "}
              <Typography
                className={width > 768 ? classes.title : classes.middleTitle}
              >
                Our Favorite Tees
              </Typography>
              <Typography className={classes.subtitle}>
                Everyday tees you need.
              </Typography>
              <Button className={classes.button}>SHOP NOW</Button>
            </Box>
          </Box>
          <Box position="relative">
            <Box
              p={5}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {" "}
              <Typography className={classes.topTitle}>
                Follow Us On Instagram
              </Typography>
            </Box>
            <Box
              p={2}
              display="flex"
              justifyContent="space-between"
              overflow="hidden"
            >
              {" "}
              <img src={Social1} alt="/" className={classes.socialImg} />
              <img src={Social2} alt="/" className={classes.socialImg} />
              <img src={Social3} alt="/" className={classes.socialImg} />
              <img src={Social4} alt="/" className={classes.socialImg} />
              <img src={Social5} alt="/" className={classes.socialImg} />
            </Box>
          </Box>
        </>
      ) : (
        <>
          {" "}
          <Box>
            <img src={HeroImg} alt="/" className={classes.img} />
          </Box>
          <Box className={classes.mobileTextWrapper}>
            <Typography className={classes.mobileTitle}>
              Our Favorite Tees
            </Typography>
            <Typography className={classes.mobileSubtitle}>
              Everyday tees you need.
            </Typography>
            <Button className={classes.mobileButton}>SHOP NOW</Button>
          </Box>
          <Box>
            <Box
              p={5}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {" "}
              <Typography className={classes.mobilTopTitle}>
                Follow Us On Instagram
              </Typography>
            </Box>
            <Box p={2} display="flex" justifyContent="space-between">
              {" "}
              <img src={Social1} alt="/" className={classes.socialMobileImg} />
              <img src={Social2} alt="/" className={classes.socialMobileImg} />
              <img src={Social3} alt="/" className={classes.socialMobileImg} />
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Shopping;
