import { Box, Typography } from "@mui/material";
import ItemData from "../helpers/Data";
import ImageListItem from "@mui/material/ImageListItem";

const About = () => {
  console.log(ItemData[0].image);

  console.log(ItemData[0].description);
  const singleItem = ItemData[0];

  return (
    <Box>
      <Box sx={{ marginBottom: 2 }}>
        <ImageListItem sx={{width:"100%", marginTop:"50px", marginBottom:"50px" ,display:"flex", justifyContent:"center"}}>
          <img
            src={singleItem.image}
            alt={singleItem.name}
            style={{ width: "890px" }}
          />
        </ImageListItem>
        <Typography variant="body1" sx={{ marginTop: 1 , fontFamily:"sans-serif", fontSize:"48px", display:"flex", justifyContent:"center" }}>
          HAKKIMIZDA
        </Typography>

        <Typography variant="body1" sx={{ marginTop: 1 , fontFamily:"sans-serif", fontSize:"24px" }}>
          {singleItem.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
