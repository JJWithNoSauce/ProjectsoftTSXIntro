type TableCellProps = {
    children: React.ReactNode;
    align?: "left" | "center" | "right" 
}

function TableCell({ children , align}: TableCellProps) {
    return ( <td className={`table-cell ${align? `table-cell-${align}`: ""}`}>{children}</td> );
}

export default TableCell;