type TableBodyProps = {
    children: React.ReactNode;
  };

function TableBody({ children }: TableBodyProps) {
    return ( <tbody className="table-body">
        {children}
    </tbody> );
}

export default TableBody;