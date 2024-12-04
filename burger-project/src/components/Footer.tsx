import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100px",
        bgcolor: "brown",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: "10px",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          color: "white",
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: "10px",
          margin: "10px",
        }}
      >
        <FacebookIcon></FacebookIcon>
        <TwitterIcon></TwitterIcon>
        <InstagramIcon></InstagramIcon>
      </Box>
      <Typography sx={{ color: "white" }}>Bütün hakları saklıdır</Typography>
    </Box>
  );
};

export default Footer;
