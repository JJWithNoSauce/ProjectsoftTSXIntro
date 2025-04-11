import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
  Grid,
} from "@mui/material";

import { animalList } from "./animalData";

function Animal() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
        }}
      >
        {animalList.map((animal, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}>
            {/* <CardMedia image={animal.img} alt={animal.name} /> */}
            <CardMedia component="img" height="140" image={animal.img} />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {animal.name}
              </Typography>
              <Typography>{animal.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </div>
  );
}

export default Animal;
