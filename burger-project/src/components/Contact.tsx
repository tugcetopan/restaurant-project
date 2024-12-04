import React from "react";
import { Box, Typography } from "@mui/material";

const Contact = () => {
  return (
<Box sx={{ backgroundColor: "#f2f2f2", width:"1000px", height:"100%", margin:"50px auto", boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.25)", borderRadius:"8px", padding:"20px" }}>
      <Box
        sx={{
          width: "600px",
          height: "400px",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.722234949491!2d27.108076999999998!3d38.401671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd9b240f8ebeb%3A0x5405cf0d307beb34!2sBurger%20Yiyelim!5e0!3m2!1str!2str!4v1733147852529!5m2!1str!2str"
          style={{ width: "100%", height: "100%", border: "none",  margin: "0px 0px 0px auto" ,}}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>

      <Box>
      <Box>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"red"}}>
          BİZE ULAŞIN
        </Typography>
      </Box>
      </Box>
    </Box>
  );
};
export default Contact;
