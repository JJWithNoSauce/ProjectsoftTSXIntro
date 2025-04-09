type TableHeadProps = {
    children: React.ReactNode;
  };

function TableHead({ children }: TableHeadProps) {
    return ( <thead className="table-head">
        {children}
    </thead> );
}

export default TableHead;