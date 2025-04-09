import { useEffect, useMemo, useState } from "react";

type PaginationProps = {
  count: number;
  siblingCount?: number;
  page?: number;
  sizePerPage?: number;
  boundaryCount?: number;
  onChangePage?: (page: number) => void;
};

function Pagination({
  count = 0,
  page = 1,
  sizePerPage = 10,
  siblingCount = 1,
  boundaryCount = 1,
  onChangePage,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const getArrayNumber = (startNumber: number, loopCount: number) => {
    return Array.from({ length: loopCount }).map((_, index) => {
      return startNumber + index;
    });
  };
  const pageList = useMemo(() => {
    const totalPage = Math.ceil(count / sizePerPage);

    const visiblePage = 2 + siblingCount * 2 + boundaryCount;
    const edgeValue = totalPage - visiblePage + 1;

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
  }, [currentPage, count, sizePerPage, boundaryCount, siblingCount]);

  // console.log('pageList:', pageList)
  const onChangeCurrentPage = (page: number) => {
    if (onChangePage) {
      onChangePage(page);
    } else {
      setCurrentPage(page);
    }
  };

  return (
    <div className="pagination">
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
  );
}

export default Pagination;
