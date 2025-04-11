type TableContainerProps = {
  children: React.ReactNode;
  loading?: boolean;
};

function TableContatiner({ children, loading }: TableContainerProps) {
  return (
    <div className="table-container">
      {loading && (
        <div className="table-loading">
          <div className="loader"></div>
        </div>
      )}
      {children}
    </div>
  );
}

export default TableContatiner;
