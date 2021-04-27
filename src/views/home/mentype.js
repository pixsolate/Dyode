import React from "react";
import { Box } from "@material-ui/core";
import Women from "../../assets/images/women.png";
import Men from "../../assets/images/men.png";
import Action from "../../assets/images/action.png";

const ManType = ({ width }) => {
  return (
    <Box>
      {width > 768 ? (
        <Box p={2} display="flex" justifyContent="space-between">
          <Box p={2}  width="33.3%">
            <img src={Women} width="100%" alt="/" />
            <Box
              bgcolor="#10504F"
              fontFamily="Pacifico"
              fontSize="40px"
              color="white"
              display="flex"
              justifyContent="center"
              p={2}
            >
              Women's
            </Box>
          </Box>
          <Box p={2}  width="33.3%">
            <img src={Men} width="100%" alt="/" />
            <Box
              bgcolor="#10504F"
              fontFamily="Pacifico"
              fontSize="40px"
              color="white"
              display="flex"
              justifyContent="center"
              p={2}
            >
              Men's
            </Box>
          </Box>
          <Box p={2}  width="33.3%">
            <img src={Action} width="100%" alt="/" />
            <Box
              bgcolor="#10504F"
              fontFamily="Pacifico"
              fontSize="40px"
              color="white"
              display="flex"
              justifyContent="center"
              p={2}
            >
              Accessories
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <Box display="flex" justifyContent="space-between">
            <Box p={1} width="50%">
              <img src={Women} width="100%" alt="/" />
              <Box
                bgcolor="#10504F"
                fontFamily="Pacifico"
                fontSize="25px"
                color="white"
                display="flex"
                justifyContent="center"
              >
                Women's
              </Box>
            </Box>
            <Box p={1}  width="50%">
              <img src={Men} width="100%" alt="/" />
              <Box
                bgcolor="#10504F"
                fontFamily="Pacifico"
                fontSize="25px"
                color="white"
                display="flex"
                justifyContent="center"
              >
                Men's
              </Box>
            </Box>
          </Box>
          <Box p={1}>
            <img
              src={Action}
              width="100%"
              height="250px"
              style={{ objectFit: "cover" }}
              alt="/"
            />
            <Box
              bgcolor="#10504F"
              fontFamily="Pacifico"
              fontSize="25px"
              color="white"
              display="flex"
              justifyContent="center"
              p={2}
            >
              Accessories
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ManType;
