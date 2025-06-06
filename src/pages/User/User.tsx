import { useMemo, useState } from "react";
import { Pagination } from "../../components/Pagination/";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "../../components/Table";
import { UserData, userList } from "./userList";
import { OrderData } from "../../type.global";
import { TextField } from "../../components/TextField";

type SortType = "string" | "date" | "number";
type Order = {
  order: OrderData;
  sortType: SortType;
};
type SearchData = {
  name: string;
  age?: string;
  birth?: string;
};

function User() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagePerSize, setPagePerSize] = useState(10);
  const [orderBy, setOrderBy] = useState<keyof UserData | null>(null);
  const [order, setOrder] = useState<Order>({
    order: "asc",
    sortType: "string",
  });
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState<SearchData>({
    name: "",
    age: "",
    birth: "",
  });
  const [totalData, setTotalData] = useState(0);

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
    //const arrow = order.order === "asc" ? 1 : 0;
    setOrder((prev) => ({ ...prev, order: isAscending, sortType: dataType }));
    setOrderBy(dataName);
  };

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event:", event);
    console.log("event:", event.target.name);
    console.log("event:", event.target.value);
    console.log("Hey I'm called!");
    setSearchData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const dataList = useMemo(() => {
    const filterData = userList
      .filter((f) => {
        if (searchData.name) {
          return f.name.toLowerCase().startsWith(searchData.name.toLowerCase());
        }
        return f;
      })
      .filter((f) => {
        if (searchData.age) {
          return f.age === Number(searchData.age);
        }
        return f;
      })
      .filter((f) => {
        if (searchData.birth) {
          return f.birth === searchData.birth;
        }
        return f;
      });
    const result = filterData.sort((a, b) => {
      if (orderBy) {
        if (order.order === "asc") {
          return sortCompare(a[orderBy], b[orderBy], order.sortType);
        }
        return sortCompare(b[orderBy], a[orderBy], order.sortType);
      }
      return 0;
    });
    setTotalData(filterData.length);

    const startItem = (currentPage - 1) * pagePerSize;
    const endItem = startItem + pagePerSize;
    return result.slice(startItem, endItem);
  }, [
    JSON.stringify(userList),
    currentPage,
    orderBy,
    order.order,
    JSON.stringify(searchData),
    pagePerSize,
  ]);
  return (
    <div>
      <TextField
        type="string"
        name="name"
        id="search"
        label="search name: "
        value={searchData.name}
        onChange={onSearchChange}
        // onKeyUp={() => setSearchInput()}
        placeholder="Search for names.."
      />
      <TextField
        name="age"
        type="number"
        id="search"
        label="search age: "
        value={searchData.age}
        onChange={onSearchChange}
        // onKeyUp={() => setSearchInput()}
        placeholder="Search for age.."
      />
      <TextField
        type="date"
        name="birth"
        id="search"
        label="search birth: "
        value={searchData.birth}
        onChange={onSearchChange}
        // onKeyUp={() => setSearchInput()}
        placeholder="Search for birth.."
      />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <TableSortLabel
                active={orderBy === "name"}
                direction={order.order}
                onClick={() => onSort("name", "string")}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell align="center">
              <TableSortLabel
                active={orderBy === "age"}
                direction={order.order}
                onClick={() => onSort("age", "number")}
              >
                Age
              </TableSortLabel>
            </TableCell>
            <TableCell align="center">
              <TableSortLabel
                active={orderBy === "birth"}
                direction={order.order}
                onClick={() => onSort("birth", "date")}
              >
                Date of Birth
              </TableSortLabel>
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
        count={totalData}
        page={currentPage}
        sizePerPage={pagePerSize}
        siblingCount={1}
        onChangePage={(page) => setCurrentPage(page)}
        onChangeRow={(row) => setPagePerSize(row)}
        customRowPerPage={[10, 20, 30, 40, 50]}
      />
    </div>
  );
}

export default User;
