import React, { Fragment, useState, useEffect, useRef } from "react";
import { differenceInDays } from "date-fns";
import axios from "axios";
import SearchBar from "components/SearchBar";
import Filters from "components/Filters";
import Results from "components/Results";

export default function LiveSearch(props) {
  const [search, setSearch] = useState({
    term: "",
    results: [],
    loading: false
  });
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({
    Asc: true,
    Reads: false
  });
  const [sortBy, setSortBy] = useState('id');
  const [direction, setDirection] = useState('asc');
  const [error, setError] = useState(false);
  const prev = useRef("");

  function showError() {
    setSearch({
      term: "",
      results: [],
      loading: false
    });
    setError(true);
  }
  useEffect(() => {
    if (prev.current === "" && search.term === "") return;
    setSearch(prev => ({
      ...prev,
      loading: false
    }));
    prev.current = search.term;

    //Checkbox filters modifying the api request
    if (filters.Reads) {
      setSortBy('reads');
    }
    if (!filters.Reads) {
      setSortBy('id');
    }
    if (filters.Asc) {
      setDirection('asc');
    }
    if (!filters.Asc) {
      setDirection('desc');
    }

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://alex-blog-api.herokuapp.com/api/posts?tags=${search.term}&sortBy=${sortBy}&direction=${direction}`
      )
      .then(response => {
        setResults(response.data.posts);
        response.data.results.sort((a, b) => {
          return differenceInDays(
            new Date(b.releaseDate),
            new Date(a.releaseDate)
          );
        });
        setSearch(search => ({
          ...search,
          results: results,
          loading: false
        }));
      })
      .catch(error => {
        showError();
      });
  }, [search.term]);

  return (
    <Fragment>
      <header className="logo">
        <img src="images/brand.png" alt="Brand" />
      </header>
      <main>
        <SearchBar
          onSearch={term => setSearch({ ...search, term })}
        />
        <Filters
          filters={filters}
          setFilter={(filter, value) =>
            setFilters({ ...filters, [filter]: value })
          }
        />
        <Results results={results} filters={filters} />
      </main>
    </Fragment>
  );
}
