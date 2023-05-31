import { Link } from "react-router-dom"
import {  Search } from "@mui/icons-material";
import { useState } from "react";
import { useSearchMutation } from "../../store/slices/articleSlice";
import { Article } from "../../types";
import { storeToLocalStorage } from "../../utils/storage";

type Props ={
  className?:string
}
const SearchForm = ({className}: Props) => {
  const [show, setShow] = useState(false);
  const [searchArticle] = useSearchMutation();
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([] as Article[]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShow(true);
    if(search.length > 2) {
      const result = await searchArticle({keywords: search}).unwrap();
      storeToLocalStorage('search', result);
      console.log(result);
      if(result.length) {
      setResults(result)
      }
    }
  }

  const handleClick = () => {
    setShow(show => !show)
  }

    const styles = {
        searchInput: "py-3 px-5 outline-none rounded-md bg-red-50",
        button: "py-3 px-5 bg-red-500 rounded-md text-white",
        results: "z-50 absolute w-full top-14 shadow-sm rounded-sm",
        link: "w-full block bg-gray-50 hover:bg-gray-100 border-b p-2"
      };
  return (
    <div className={className ?? "sm:hidden lg:flex relative"}>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search category, source, author"
        id="search"
        name="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button className={styles.button} color="error">
        <Search />
      </button>
    </form>
    {show && <div className={styles.results}>
     {results.length > 0  && results?.map(result => (
      <Link to={`/search/${result?.title}`} onClick={handleClick} className={styles.link}>{result?.title}</Link>
     ))}
    </div>}
  </div>
  )
}

export default SearchForm