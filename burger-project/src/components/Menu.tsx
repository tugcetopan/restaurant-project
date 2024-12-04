import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {Box} from '@mui/material';
import ItemData from '../helpers/Data';

export default function Menu() {
  return (
  <Box sx={{display: "grid", gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap:2, alignItems:"center", justifyContent:"center", margin:"50px 50px 50px 50px" 
  }}> 
  
    {ItemData.map((item, index) => {
      return(
        <Card  key={index} sx={{ maxWidth: 345}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={item.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.content}
            </Typography>
            <Typography variant="body2" sx={{ color: "red" }}>
             {item.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
      );
      
    })}

  </Box>
 
   
  );
}
