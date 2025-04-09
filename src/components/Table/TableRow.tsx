
type TableRowProps = {
    children: React.ReactNode;
}

function TableRow({ children }: TableRowProps) {
    return (
        <tr className="table-row">
            {children}
        </tr>
    );
}

export default TableRow;