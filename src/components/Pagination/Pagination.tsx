import { useEffect, useMemo, useState } from "react";
import { start } from "repl";

type PaginationProps = {
  count: number;
  siblingCount?: number;
  page?: number;
  sizePerPage?: number;
  boundaryCount?: number;
  onChangePage?: (page: number) => void;
  onChangeRow?: (row: number) => void;
  customRowPerPage?: number[];
};

function Pagination({
  count = 0,
  page = 1,
  sizePerPage = 10,
  siblingCount = 1,
  boundaryCount = 1,
  onChangePage,
  onChangeRow,
  customRowPerPage,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPageList, setRowPerPageList] = useState([10, 25, 50, 100]);
  const [rowPerPage, setRowPerPage] = useState(rowPerPageList[0]);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  useEffect(() => {
    setRowPerPage(sizePerPage);
  }, [sizePerPage]);

  useEffect(() => {
    if (customRowPerPage) {
      setRowPerPageList(customRowPerPage);
      onChangeSizeRow(customRowPerPage[0]);
    }
  }, [JSON.stringify(customRowPerPage)]);

  const getArrayNumber = (startNumber: number, loopCount: number) => {
    return Array.from({ length: loopCount }).map((_, index) => {
      return startNumber + index;
    });
  };
  const pageOfRecord = useMemo(() => {
    const startItem = (currentPage - 1) * rowPerPage;
    let endItem = startItem + rowPerPage;
    const totalPage = Math.ceil(count / rowPerPage);
    const total = count % rowPerPage;
    console.log("total:", total);
    if (currentPage === totalPage && total) {
      endItem = startItem + total;
    }
    return {
      startItem: startItem + 1,
      endItem: endItem,
      totalItem: count,
    };
  }, [currentPage, rowPerPage, count]);
  const pageList = useMemo(() => {
    const totalPage = Math.ceil(count / rowPerPage);

    const visiblePage = 2 + siblingCount * 2 + boundaryCount;
    const edgeValue = totalPage - visiblePage + 1;
    if (currentPage > totalPage) {
      if (onChangePage) {
        onChangePage(1);
      } else {
        setCurrentPage(1);
      }
    }
    if (totalPage <= 5) {
      return Array.from({ length: totalPage }).map((_, index) => index + 1);
    }
    if (currentPage < 5) {
      const startPageList = getArrayNumber(1, visiblePage);
      return [...startPageList, "...", totalPage];
    }

    if (currentPage >= 5 && currentPage <= edgeValue) {
      //   const beforeCurrentPage = getBeforeCurrentPage(siblingCount, currentPage);
      //   const afterCurrentPage = getAfterCurrentPage(siblingCount, currentPage);
      const middlePageCount = siblingCount * 2 + 1;
      const startMiddlePage = currentPage - siblingCount;
      const middlePageList = getArrayNumber(startMiddlePage, middlePageCount);
      return [1, "...", ...middlePageList, "...", totalPage];
    }

    const edgeValueList = getArrayNumber(edgeValue, visiblePage);

    return [1, "...", ...edgeValueList];
  }, [currentPage, count, rowPerPage, boundaryCount, siblingCount]);

  // console.log('pageList:', pageList)
  const onChangeCurrentPage = (page: number) => {
    if (onChangePage) {
      onChangePage(page);
    } else {
      setCurrentPage(page);
    }
  };

  const onChangeSizeRow = (row: number) => {
    if (onChangeRow) {
      onChangeRow(row);
    } else {
      setRowPerPage(row);
    }
  };

  return (
    <div className="pagination">
      <div>
        <select
          value={rowPerPage}
          name="rowSelect"
          id="rowSelect"
          onChange={(event) => onChangeSizeRow(Number(event.target.value) || 5)}
        >
          {rowPerPageList.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span>Rows per page :</span>
        <span>{`${pageOfRecord.startItem}-${pageOfRecord.endItem} of ${pageOfRecord.totalItem}`}</span>
      </div>
      <div>
        {pageList.map((page, index) => (
          <button
            key={index}
            disabled={typeof page === "string"}
            onClick={() => onChangeCurrentPage(page as number)}
            className={`pagination-neutral ${
              page === currentPage ? `pagination-active` : ""
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
