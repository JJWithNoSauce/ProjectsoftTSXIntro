import { use, useMemo, useState } from "react";
import { Pagination } from "../../components/Pagination/";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "../../components/Table";
import { UserData, userList } from "./userList";
import { OrderData } from "../../type.global";

type SortType = "string" | "date" | "number";
type Order = {
  order: OrderData;
  sortType: SortType;
};

function User() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagePerSize, setPagePerSize] = useState(10);
  const [orderBy, setOrderBy] = useState<keyof UserData | null>(null);
  const [order, setOrder] = useState<Order>({
    order: "asc",
    sortType: "string",
  });

  const sortCompare = (a: any, b: any, dataType: SortType) => {
    if (dataType === "string") {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    }
    if (dataType === "date") {
      return new Date(a as string).valueOf() - new Date(b as string).valueOf();
    }
    return a - b;
  };

  const onSort = (dataName: keyof UserData, dataType: SortType) => {
    const isAscending = order.order === "asc" ? "desc" : "asc";
    setOrder((prev) => ({ ...prev, order: isAscending, sortType: dataType }));
    setOrderBy(dataName);
  };

  const dataList = useMemo(() => {
    const result = userList.sort((a, b) => {
      if (orderBy) {
        if (order.order === "asc") {
          return sortCompare(a[orderBy], b[orderBy], order.sortType);
        }
        return sortCompare(b[orderBy], a[orderBy], order.sortType);
      }
      return 0;
    });
    return result.slice(currentPage - 1, currentPage - 1 + pagePerSize);
  }, [JSON.stringify(userList), currentPage, orderBy, order.order]);
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" onClick={() => onSort("name", "string")}>
              Name
            </TableCell>
            <TableCell align="center" onClick={() => onSort("age", "number")}>
              Age
            </TableCell>
            <TableCell align="center" onClick={() => onSort("birth", "date")}>
              BirthDay
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {dataList.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell align="right">{user.age}</TableCell>
              <TableCell>{user.birth}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination
        count={userList.length}
        page={currentPage}
        siblingCount={1}
        onChangePage={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default User;
