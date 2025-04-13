
import { Route,Routes } from "react-router-dom";
import Pokedex from "../components/Pokedex/Pokedex";
import Details from "../components/Details/Details";

function CustomeRoute({ element }) {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/pokemon/:id" element={<Details />} />
    </Routes>
  );
}

export default CustomeRoute;