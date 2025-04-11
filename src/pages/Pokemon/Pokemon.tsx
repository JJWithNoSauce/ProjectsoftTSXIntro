import { useEffect, useState } from "react";
import { fetchApi } from "../../helpers/fetchApi";
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableSortLabel,
} from "../../components/Table";
import { Pagination } from "../../components/Pagination";
import TableContatiner from "../../components/Table/TableContainer";
import { TextField } from "../../components/TextField";

type PokemonData = {
  name: string;
  url: string;
};

type PokemonDetail = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
};

type PokemonList = PokemonDetail & PokemonCries & PokemonSprites;

type PokemonSprites = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
};

type PokemonCries = {
  lastest: string;
  legacy: string;
};

type PokemonRespondAPI = {
  count: number;
  results: PokemonData[];
  next: string | null;
  previous: string | null;
};

function Pokemon() {
  const [pokemonList, setPokemonList] = useState<PokemonList[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const [searchData, setSearchData] = useState<string>("");

  const getPokemon = async (page: number, pageSize: number) => {
    setLoading(true);
    try {
      const res = await fetchApi<PokemonRespondAPI>(
        `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=${pageSize}`
      );
      console.log("res:", res);
      // setPokemonList(res.results);
      setCount(res.count);
      const n = res.results.map((item) => {
        return getPokemonDetail(item.url);
      });
      // Promise.all(n)
      //   .then((results) => {
      //     console.log("result: ", results); // [10, 20, 30]
      //   })
      //   .catch((error) => {
      //     console.error("something faild", error);
      //   });

      const x = await Promise.all(n);
      setPokemonList(x);
      console.log("x:", x);
    } catch (error) {
      console.log("error:", error);
    }
    setLoading(false);
  };

  const onSearchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${searchData}/`;
    if (!searchData) {
      return getPokemon(currentPage, pageSize);
    }
    try {
      const res = await getPokemonDetail(url);
      console.log("res:", res);
      setPokemonList([res]);
    } catch (error) {
      console.log("error:", error);
      setPokemonList([]);
    }
  };

  const getPokemonDetail = (url: string) => {
    return new Promise<PokemonList>(async (resolve, reject) => {
      try {
        const res = await fetchApi<
          PokemonDetail & { cries: PokemonCries; sprites: PokemonSprites }
        >(url);
        resolve({
          id: res.id,
          name: res.name,
          base_experience: res.base_experience,
          height: res.height,
          is_default: res.is_default,
          order: res.order,
          weight: res.weight,
          lastest: res.cries.lastest,
          legacy: res.cries.legacy,
          back_default: res.sprites.back_default,
          back_shiny: res.sprites.back_shiny,
          front_default: res.sprites.front_default,
          front_shiny: res.sprites.front_shiny,
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  const onChangePage = (page: number) => {
    getPokemon((page - 1) * pageSize, pageSize);
    setCurrentPage(page);
  };

  const onChangeRow = (row: number) => {
    getPokemon((currentPage - 1) * row, row);
    setPageSize(row);
  };

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("event:", event);
    // console.log("event:", event.target.name);
    // console.log("event:", event.target.value);
    // console.log("Hey I'm called!");
    setSearchData(event.target.value);
  };

  useEffect(() => {
    getPokemon(currentPage, pageSize);
  }, []);
  return (
    <div>
      <TextField
        type="string"
        name="name"
        id="search"
        label="search name: "
        value={searchData}
        onChange={onSearchChange}
        // onKeyUp={() => setSearchInput()}
        placeholder="Search for names.."
      />
      <button onClick={onSearchPokemon}>ค้นหา</button>
      <TableContatiner loading={loading}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">No.</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Weight</TableCell>
              <TableCell align="center">Height</TableCell>
              <TableCell align="center">Sound</TableCell>
              <TableCell align="center">Sprite</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {pokemonList.map((pokemon, index) => (
              <TableRow key={index}>
                <TableCell>
                  {(currentPage - 1) * pageSize + index + 1}
                </TableCell>
                <TableCell>{pokemon.name}</TableCell>
                <TableCell align="right">{pokemon.weight}</TableCell>
                <TableCell align="right">{pokemon.height}</TableCell>
                <TableCell align="right">
                  <audio controls>
                    <source src={pokemon.legacy} type="audio/ogg" />
                  </audio>
                </TableCell>
                <TableCell align="right">
                  <img src={pokemon.front_default} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Pagination
          count={count}
          page={currentPage}
          sizePerPage={pageSize}
          // siblingCount={1}
          onChangePage={onChangePage}
          onChangeRow={onChangeRow}
          customRowPerPage={[10, 20, 30, 40, 50]}
        />
      </TableContatiner>
    </div>
  );
}

export default Pokemon;
