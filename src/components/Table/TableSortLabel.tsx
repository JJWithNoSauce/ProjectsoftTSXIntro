import { OrderData } from "../../type.global";

type TableSortLabelProps = {
  children: React.ReactNode;
  active: boolean;
  direction: OrderData;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

function TableSortLabel({
  children,
  active,
  direction,
  ...arg
}: TableSortLabelProps) {
  return (
    <div {...arg}>
      {active && (
        <span>{direction === "desc" ? <>&uarr;</> : <>&darr;</>}</span>
      )}
      <span>{children}</span>
    </div>
  );
}

export default TableSortLabel;
