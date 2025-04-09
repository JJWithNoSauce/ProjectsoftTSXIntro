import { Card, CardContent, CardMedia } from "../../components/Card";
import { Typography } from "../../components/Typography";
import { animalList } from "./animalData";

function Animal() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {animalList.map((animal, index) => (
        <Card key={index}>
          <CardMedia image={animal.img} alt={animal.name} />
          <CardContent>
            <Typography varirant={"h1"}>{animal.name}</Typography>
            <Typography varirant={"body1"}>{animal.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Animal;
