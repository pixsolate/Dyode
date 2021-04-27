import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import Img1 from "../../assets/images/product.png";
import Img2 from "../../assets/images/product.png";
import Img3 from "../../assets/images/product.png";
import Img4 from "../../assets/images/product.png";
import Img5 from "../../assets/images/product.png";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles((theme) => ({
  topTitle: {
    fontFamily: "Pacifico",
    fontSize: 60,
    color: "black",
  },
  mobileTopTitle: {
    fontFamily: "Pacifico",
    fontSize: 30,
    color: "black",
  },
  textWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontFamily: "Lato",
    fontSize: 22,
    color: "black",
  },
  subtitle: {
    fontFamily: "Lato",
    fontSize: 16,
    color: "black",
    marginTop: 15,
  },
  price: {
    fontFamily: "Pacifico",
    fontSize: 25,
    color: "#10504F",
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
    fontFamily: "Lato",
    fontSize: 15,
    color: "black",
  },
  mobileSubtitle: {
    fontFamily: "Lato",
    fontSize: 10,
    color: "black",
    marginTop: 15,
  },
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    paritialVisibilityGutter: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    paritialVisibilityGutter: 0,
  },
};

const images = [Img1, Img2, Img3, Img4, Img5,Img1, Img2, Img3, Img4, Img5 ];

const Product = ({ width }) => {
  const classes = useStyles();
  return (
    <Box p={4}>
      <Box p={2} display="flex" justifyContent="center" alignItems="center">
        {" "}
        <Typography
          className={width > 600 ? classes.topTitle : classes.mobileTopTitle}
        >
          {width > 600 ? "New Arrivals" : "Shop New Arrivals"}
        </Typography>
      </Box>

      <Carousel
        ssr
        partialVisbile
        itemClass="image-item"
        responsive={responsive}
      >
        {images.map((image) => (
          <Box className={classes.textWrapper}>
            <img
              style={{ width: "100%", height: "auto"}}
              src={image}
              alt="/"
            />{" "}
            <Typography
              className={width > 600 ? classes.title : classes.mobileTitle}
            >
              Product Title
            </Typography>
            <Typography
              className={
                width > 600 ? classes.subtitle : classes.mobileSubtitle
              }
            >
              WOMEN'S-SHIRT
            </Typography>{" "}
            <Box display="flex" alignItems="baseline">
              <font
                style={{
                  fontFamily: "Pacifico",
                  fontSize: 35,
                  color: "#10504F",
                }}
              >
                $
              </font>{" "}
              <Typography className={classes.price}>19.99 </Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Product;
