import { Route, Routes } from "react-router-dom";
import { TsVariableTemplate } from "./pages/TsVariableTemplate";
import { Layout } from "./components/Layout";
import { Animal } from "./pages/Animal";
import { User } from "./pages/User";
import { Pokemon } from "./pages/Pokemon";
//import { Table } from "./pages/Table";

function RoutesManagement() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<TsVariableTemplate />} />
        <Route path="/animal" element={<Animal />} />
        <Route path="/user" element={<User />} />
        <Route path="/pokemon" element={<Pokemon />} />
        {/* <Route path="/Table" element={<Table />} /> */}
      </Route>
    </Routes>
  );
}

export default RoutesManagement;
