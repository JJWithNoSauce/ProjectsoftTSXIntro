type TypographyVariant =
  | "body1"
  | "body2"
  | "inherit"
  | "overline"
  | "subtitle1"
  | "subtitle2";

type TypographyTag =
  | "button"
  | "caption"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

type TypographyDynamicTagProps = {
  children: React.ReactNode;
  varirant: TypographyTag;
  className?: string;
};

type TypographyProps = {
  children: React.ReactNode;
  varirant: TypographyVariant | TypographyTag;
};

function TypographyDynamicTag({
  varirant,
  children,
  className,
}: TypographyDynamicTagProps) {
  const Tag = varirant as keyof React.JSX.IntrinsicElements;

  return <Tag className={className}>{children}</Tag>;
}

function Typography({ children, varirant }: TypographyProps) {
  const tagList: TypographyTag[] = [
    "button",
    "caption",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
  ];

  if (tagList.some((s) => s === varirant)) {
    return (
      <TypographyDynamicTag
        className={`typograhpy-${varirant}`}
        varirant={varirant as TypographyTag}
      >
        {children}
      </TypographyDynamicTag>
    );
  }
  return <div className={`typography-${varirant}`}>{children}</div>;
}

export default Typography;
