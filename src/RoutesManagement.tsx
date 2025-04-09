import { Route, Routes } from "react-router-dom";
import { TsVariableTemplate } from "./pages/TsVariableTemplate";
import { Layout } from "./components/Layout";
import { Animal } from "./pages/Animal";
//import { Table } from "./pages/Table";

function RoutesManagement() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<TsVariableTemplate />} />
        <Route path="/Animal" element={<Animal />} />
        {/* <Route path="/Table" element={<Table />} /> */}
      </Route>
    </Routes>
  );
}

export default RoutesManagement;
