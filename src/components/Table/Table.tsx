type TableProps = {
    children: React.ReactNode;
  };

function Table({ children }: TableProps) {
    return ( <div>
        <table className="table">{children}</table>
    </div> );
}

export default Table;