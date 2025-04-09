type TableCellProps = {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
} & React.DetailedHTMLProps<
  React.TdHTMLAttributes<HTMLTableDataCellElement>,
  HTMLTableDataCellElement
>;

function TableCell({ children, align, ...arg }: TableCellProps) {
  return (
    <td {...arg} className={`table-cell ${align ? `table-cell-${align}` : ""}`}>
      {children}
    </td>
  );
}

export default TableCell;
