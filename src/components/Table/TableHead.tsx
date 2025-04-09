type TableHeadProps = {
    children: React.ReactNode;
  };

function TableHead({ children }: TableHeadProps) {
    return ( <div>
        {children}
    </div> );
}

export default TableHead;