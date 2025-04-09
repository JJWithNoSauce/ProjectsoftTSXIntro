type TableBodyProps = {
    children: React.ReactNode;
  };

function TableBody({ children }: TableBodyProps) {
    return ( <div>
        {children}
    </div> );
}

export default TableBody;