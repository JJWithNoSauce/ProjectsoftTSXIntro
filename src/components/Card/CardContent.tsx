type CardContentProps = {
  children: React.ReactNode;
};

function CardContent({ children }: CardContentProps) {
  return <div>{children}</div>;
}

export default CardContent;
