type CardMediaProps = {
  image: string;
  alt?: string;
};

function CardMedia({ image, alt }: CardMediaProps) {
  return (
    <div className="card-image">
      <img src={image} alt={alt} />
    </div>
  );
}

export default CardMedia;
