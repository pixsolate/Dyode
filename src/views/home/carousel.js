import React from "react";
import { Box, Typography, makeStyles, Button } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import Img1 from "../../assets/images/slider1.png";
import Img2 from "../../assets/images/slider2.png";
import Img3 from "../../assets/images/slider3.png";

const useStyles = makeStyles((theme) => ({
  textWrapper: {
    top: "50%",
    left: "10%",
    transform: "translateY(-50%)"
  },
  mobileTextWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor:"#EFEFEF",
    marginTop:20,
    padding:35,
  },
  title: {
    fontFamily: "Pacifico",
    fontSize: 60,
    color: "#10504F",
  },
  whiteTitle: {
    fontFamily: "Pacifico",
    fontSize: 60,
    color: "white",
  },
  subtitle: {
    fontFamily: "Lato",
    fontSize: 26,
    color: "#10504F",
    marginTop: 15,
  },
  subWhitetitle: {
    fontFamily: "Lato",
    fontSize: 26,
    color: "white",
    marginTop: 15,
  },
  button: {
    backgroundColor: "black !important",
    color: "white",
    marginTop: 15,
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
}));

const CarouselPage = ({ width }) => {
  const classes = useStyles();
  return (
    <>
      {width > 600 ? (
        <Carousel>
          <Box>
            <img
              src={Img1}
              alt=""
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
            <Box position="absolute" className={classes.textWrapper}>
              {" "}
              <Typography className={classes.title}>
                Shop New Arrivals
              </Typography>
              <Typography className={classes.subtitle}>
                Our coolest new items are waiting for you!
              </Typography>
              <Button className={classes.button}>SHOP NOW</Button>
            </Box>
          </Box>
          <Box>
            {" "}
            <img
              src={Img2}
              alt=""
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
            <Box position="absolute" className={classes.textWrapper}>
              {" "}
              <Typography className={classes.whiteTitle}>
                Our Fave Tees
              </Typography>
              <Typography className={classes.subWhitetitle}>
                Shop all of our favorites.
              </Typography>
              <Button className={classes.button}>SHOP NOW</Button>
            </Box>
          </Box>
          <Box>
            {" "}
            <img
              src={Img3}
              alt=""
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
            <Box position="absolute" className={classes.textWrapper}>
              {" "}
              <Typography className={classes.whiteTitle}>Men’s Tees</Typography>
              <Typography className={classes.subWhitetitle}>
                Find the perfect shirt.
              </Typography>
              <Button className={classes.button}>SHOP NOW</Button>
            </Box>
          </Box>
        </Carousel>
      ) : (
        <>
          <Carousel>
            <Box>
              <img
                src={Img1}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Box>
              <img
                src={Img2}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Box>
              <img
                src={Img3}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Carousel>
          <Box className={classes.mobileTextWrapper}>
            {" "}
            <Typography className={classes.mobileTitle}>
              Shop New Arrivals
            </Typography>
            <Typography className={classes.mobileSubtitle}>
              Our coolest new items are waiting for you!
            </Typography>
            <Button className={classes.button}>SHOP NOW</Button>
          </Box>
        </>
      )}
    </>
  );
};

export default CarouselPage;
