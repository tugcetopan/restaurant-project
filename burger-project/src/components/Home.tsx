import React from "react";
// import { Box, Button } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ItemData from "../helpers/Data";
import { useEffect } from "react";

function Home() {
  console.log(ItemData);

  const randomImage = ItemData[Math.floor(Math.random() * ItemData.length)];

  useEffect(() => {}, [randomImage]);

  return (
    <ImageList>
      <ImageListItem
        key={randomImage.image}
        cols={1}
        sx={{ width: "100%", height: "100%" }}
      >
        <img src={`${randomImage.image}`} />
      </ImageListItem>
    </ImageList>
  );
}
export default Home;
