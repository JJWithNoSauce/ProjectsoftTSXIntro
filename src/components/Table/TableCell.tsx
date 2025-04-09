type TableCellProps = {
    children: React.ReactNode;
}

function TableCell({ children }: TableCellProps) {
    return ( <div><td>{children}</td></div> );
}

export default TableCell;